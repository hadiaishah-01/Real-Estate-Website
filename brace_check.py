import sys

def check_braces(filename):
    with open(filename, 'r') as f:
        content = f.read()

    stack = []
    # Strip comments first
    import re
    content_no_comments = re.sub(r'/\*.*?\*/', '', content, flags=re.DOTALL)
    
    line_num = 1
    for char in content_no_comments:
        if char == '\n':
            line_num += 1
        elif char == '{':
            stack.append(line_num)
        elif char == '}':
            if not stack:
                print(f"Extra closing brace at line {line_num}")
            else:
                stack.pop()

    if stack:
        print(f"Unclosed braces opened at lines: {stack}")
    else:
        print("Braces are perfectly balanced!")

check_braces('style.css')
