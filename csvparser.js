(function (root, undefined) {
  "use_strict";
  function parse(csv) {
    var 
      length    = csv.length
    , start     = 0
    , end       = 0
    , cchar     = csv[0]
    , nchar     = csv[1]
    , table     = []
    , row       = []
    , i         = 0
    , delimeter = ","
    , newline   = "\n"
    , dquotes   = "\""
    , ncolumns  = null;
    
    // next character
    function next () {
      i++;
      cchar = csv[i];
      nchar = csv[i + 1];
    }

    while(i < length) {
      if (cchar === dquotes) {                 // double quotes
        next();
        start++;
        while (i < length && !(cchar === dquotes && nchar === delimeter) ) {
          // if we find two double quotes together we move another position
          if (cchar === dquotes && nchar === dquotes) {
            next();
            end++;
          } 
          next();
          end++;
        }   
      } else if (cchar === delimeter) {       // delimeter 
        row.push(csv.substr(start, end));     // new colum appended to the row
        start = i + 1;
        end = 0;
      } else if (cchar === newline) {         // new line
        if (!ncolumns) {
          ncolumns = row.length;
        }
        if (row.length >= ncolumns) {
          row.push(csv.substr(start, end));
          table.push(row);                    // new row appended to the table
          start = i + 1;
          end = 0;
          row = [];
        }
      } else {
        end++;
      }
      next();
    }
    return table;
  }
  if (!root.CSV) {
    root.CSV = {
      parse: parse
    };
  }
}(this));