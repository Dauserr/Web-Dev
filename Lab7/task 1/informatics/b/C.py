correct_answer = int(input())
student_answer = int(input())

if student_answer == correct_answer or (correct_answer != 1 and student_answer != 1):
    print("YES")
else:
    print("NO")
