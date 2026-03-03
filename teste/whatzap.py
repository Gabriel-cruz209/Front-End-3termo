import pywhatkit
phone_number = '+5519982443230'
message = 'Teste de mensagem'
hours = 20
minutes = 23
pywhatkit.sendwhatmsg(phone_number, message, hours, minutes)
print('Mensagem enviada')