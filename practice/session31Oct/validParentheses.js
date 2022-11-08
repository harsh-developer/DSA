// check for valid parentheses

function validParentheses(brackets){
    if(brackets.length %2 != 0){
        return false;
    }
    let stack = [];
    for(let i = 0; i<brackets.length; i++){
        if(brackets[i] == "(" || brackets[i] == "{" || brackets[i] == "["){
            stack.push(brackets[i]);
            continue;
        }

        let check;
        if(brackets[i] == "}"){
            check = stack.pop();
            if(check == "(" || check == "["){
                return 0;
            }
        }
        if(brackets[i] == ")"){
            check = stack.pop();
            if(check == "{" || check == "["){
                return 0;
            }
        }
        if(brackets[i] == "]"){
            check = stack.pop();
            if(check == "(" || check == "{"){
                return 0;
            }
        }
    }
    if(stack.length > 0){
        return 0
    }
    return 1;
}
console.log(validParentheses([ '[', '{', '}', ']', '(', ')', '(', '{' ]))