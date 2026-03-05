# import pywhatkit
# phone_number = '+5519982443230'
# message = 'Teste de mensagem'
# hours = 20
# minutes = 23
# pywhatkit.sendwhatmsg(phone_number, message, hours, minutes)
# print('Mensagem enviada')


import pywhatkit
import time

# =========================
# LISTA DE CONTATOS
# =========================

contatos = [
    {"nome": "Gabriel Gomes", "numero": "+5519982443230"}
]

# =========================
# LISTA DE MENSAGENS
# =========================

mensagens = [

"Era uma vez um ogro chamado Shrek que vivia sozinho em seu pântano.",
"Shrek gostava da solidão e de assustar qualquer pessoa que chegasse perto.",
"Um dia, várias criaturas de contos de fadas apareceram no pântano dele.",
"Shrek descobre que todas foram expulsas do reino pelo Lord Farquaad.",
"Determinado a recuperar seu pântano, Shrek vai falar com Farquaad.",
"No caminho ele conhece um burro muito falante chamado Burro.",
"Burro decide acompanhar Shrek em sua jornada.",
"Lord Farquaad promete devolver o pântano se Shrek resgatar a princesa Fiona.",
"Shrek e Burro viajam até um castelo guardado por um dragão.",
"Depois de muitos perigos, eles conseguem resgatar Fiona.",
"No caminho de volta, Shrek e Fiona começam a se aproximar.",
"Mas Fiona esconde um grande segredo.",
"À noite ela se transforma em ogra por causa de uma maldição.",
"Shrek entende que também tem sentimentos por ela.",
"Depois de muitos conflitos, Shrek corre para impedir o casamento de Fiona com Farquaad.",
"No final, Fiona escolhe Shrek.",
"O beijo do amor verdadeiro quebra a maldição.",
"Fiona permanece ogra para sempre, feliz ao lado de Shrek.",
"E todos vivem felizes para sempre no pântano."

]

# =========================
# CONFIGURAÇÃO DE HORÁRIO
# =========================

hora_inicial = 15
minuto_inicial = 45

# intervalo entre mensagens (em minutos)
intervalo = 1  # precisa ser inteiro

print("Iniciando automação...")

contador = 0

# =========================
# LOOP PRINCIPAL
# =========================

for contato in contatos:

    for msg in mensagens:

        minuto_total = minuto_inicial + (contador * intervalo)

        # Corrige quando passa de 59 minutos
        hora_envio = hora_inicial + (minuto_total // 60)
        minuto_envio = minuto_total % 60

        print(f"Agendando mensagem para {contato['nome']} às {hora_envio}:{minuto_envio:02d}")

        pywhatkit.sendwhatmsg(
            contato['numero'],
            msg,
            int(hora_envio),
            int(minuto_envio),
            wait_time=15,
            tab_close=True
        )

        contador += 1

        time.sleep(5)

print("Todas as mensagens foram agendadas!")