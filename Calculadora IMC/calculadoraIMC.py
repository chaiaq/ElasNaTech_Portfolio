altura = input("Por favor, digite sua altura no formato 0.00: ")
peso = input("Agora digite seu peso (em quilos): ")

imc = float(peso)/(float(altura)*float(altura))

print("Seu IMC é de %.1f" %(imc))

if (imc < 18.5):
    print("Você está abaixo do peso.")
elif (imc < 24.9):
    print("Seu peso está normal.")
elif (imc < 30):
    print("Você está com sobrepeso.")
else:
    print("Você está com obesidade.")
