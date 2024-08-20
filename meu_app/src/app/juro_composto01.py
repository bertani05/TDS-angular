import math

def calcular_tempo_juros_compostos(montante, capital_inicial, taxa_juros):
    """
    Calcula o tempo necessário para atingir um montante usando a fórmula de juros compostos.

    Parâmetros:
    montante (float): O montante final desejado.
    capital_inicial (float): O capital inicial investido.
    taxa_juros (float): A taxa de juros (em decimal; por exemplo, 10% deve ser passado como 0.10).

    Retorna:
    float: O tempo necessário para atingir o montante desejado.
    """
    tempo = (math.log(montante) - math.log(capital_inicial)) / math.log(1 + taxa_juros)
    return tempo

# Exemplo de uso:
montante_desejado = 133.10  # Montante final desejado em reais
capital = 100.0            # Capital inicial em reais
taxa = 0.10                 # Taxa de juros (10%)

tempo_necessario = calcular_tempo_juros_compostos(montante_desejado, capital, taxa)
print(f"O tempo necessário para atingir R$ {montante_desejado:.2f} é: {tempo_necessario:.2f} anos")
