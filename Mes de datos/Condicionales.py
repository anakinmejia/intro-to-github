#Trabajar con else
print("primer programa")
a = 93
b = 27
if a >= b:
    print(a)


#Trabajar con else
print("segundo programa")
a = 93
b = 27
if a <= b:
    print(a)
else:
    print(b)

# Trabajar con elif
print("tercer programa")

a = 93
b = 27
if a >= b:
    print("a is greater than or equal to b")
elif a == b:
    print("a is equal to b")



# Combina declaraciones if, elif y else
print("cuarto programa")

a = 55
b = 93
if a > b:
    print("a is greater than b")
elif a < b:
    print("a is less than b")
else: 
    print ("a is equal to b")   


print("quinto programa")

a = 55
b = 55
if a > b:
    print("a is greater than b")
elif a < b:
    print("a is less than b")
else: 
    print ("a is equal to b") 


# Trabajar con lógica condicional anidada
print("sexto programa")
a = 16
b = 25
c = 27
if a > b:
    if b > c:
        print ("a is greater than b and b is greater than c")
    else: 
        print ("a is greater than b and less than c")
elif a == b:
    print ("a is equal to b")
else:
    print ("a is less than b")


# ¿Qué son los operadores 'y' y 'o'?

# el or operador

print("sexto programa utilizado el operador OR")
a = 23
b = 34
if a == 34 or b == 34:
    print(a + b)

# el and operador
print("septimo programa utilizado el operador AND")
a = 34
b = 34
if a == 34 and b == 34:
    print (a + b)

