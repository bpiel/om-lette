%lex
%%

";".*                   {/* comment */}
"("                     {return '(';}
")"                     {return ')';}
"["                     {return '[';}
"]"                     {return ']';}
"{"                     {return '{';}
"}"                     {return '}';}

"#"                     {return '#';}
":"                     {return ':';}

[-+]?[0-9]+((\.[0-9]*[eE][-+]?[0-9]+)|(\.[0-9]*)|([eE][-+]?[0-9]+))     {return 'FLOAT';}
[-+]?([1-9][0-9]+|[0-9])             {return 'INTEGER';}
\"([^\"\\]|\\[\'\"\\bfnrt])*\"              {return 'STRING';}
[a-zA-Z*+!\-_=<>?/][0-9a-zA-Z*+!\-_=<>?/]*    {return 'IDENTIFIER';}

[\s,]+                 {/*return 'SPACE';*/}
\%(\&|[1-9]|1[0-9]|20)?          {return 'ANON_ARG';}

<<EOF>>                {return 'EOF';}

/lex

%left SPACE
%start start

%%

/*
lisp forms:

The basic elements of s-expressions are lists and atoms.

Lists are delimited by parentheses and can contain any number of
whitespace-separated elements. Atoms are everything else.

The elements of lists are themselves s-expressions (in other words, atoms or
nested lists). Comments--which aren't, technically speaking,
s-expressions--start with a semicolon, extend to the end of a line, and are
treated essentially like whitespace. */

start:            sexpressions EOF         { return $1;} ;

sexpressions:     sexpression              { $$ = [$1]; }
  |               sexpressions sexpression { $$ = $1; $$.push($2); }
  ;

sexpression:  list                         { $$ = $list; }
  |           vector                       { $$ = ['vector', $vector]; }
  |           hashmap                      { $$ = ['hashmap', $hashmap]; }
  |           set                          { $$ = ['set', $set]; }
  |           atom                         { $$ = $atom; }
  ;

list:         '(' elements ')'             { $$ = $elements; }
  |           '(' ')'                      { $$ = []; }
  ;

vector:       '[' elements ']'             { $$ = $elements; }
  |           '[' ']'                      { $$ = []; }
  ;

set:          '#' '{' elements '}'         { $$ = $elements; }
  |           '#' '{' '}'                  { $$ = []; }
  ;

hashmap:      '{' elements '}'             { $$ = $elements; }
  |           '{' '}'                      { $$ = []; }
  ;

elements:     element                      { $$ = [$1]; }
  |           elements element             { $$ = $1; $$.push($2); }
  ;

element:      sexpression                  { $$ = $1; }
  ;

atom:         symbol
  |           literal
  ;

literal:      STRING
  |           INTEGER                      { $$ = parseInt($1); }
  |           FLOAT                        { $$ = parseFloat($1); }
  ;

keyword:      ':' IDENTIFIER               { $$ = ['keyword', $2]; }
;

symbol:       IDENTIFIER                   { $$ = $1; }
  |           keyword                      { $$ = $1; }
  ;

%%
