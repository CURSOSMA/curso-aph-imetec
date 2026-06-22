import { useState } from "react";

const AVALIACOES = {
  1: { titulo: "Avaliação — Módulo 1: Introdução ao APH", questoes: [
      { id:1, enunciado:"O APH é definido como:", opcoes:["Todo cuidado prestado dentro do hospital","Todo cuidado fora do hospital até entrega ao serviço de saúde","Apenas transporte em ambulância","Somente atendimentos do SAMU"], correta:1 },
      { id:2, enunciado:"A 'hora de ouro' refere-se:", opcoes:["Tempo máximo de transporte","Período crítico pós-trauma onde intervenções rápidas salvam a vida","Turno mais movimentado do plantão","Tempo de resposta da regulação"], correta:1 },
      { id:3, enunciado:"Qual portaria institui a PNAU?", opcoes:["Lei 8.080/1990","Portaria MS 2.048/2002","Portaria MS 1.863/2003","Resolução COFEN 311/2007"], correta:2 },
      { id:4, enunciado:"Quem criou as primeiras ambulâncias militares napoleônicas?", opcoes:["Jonathan Letterman","Florence Nightingale","Dominique Jean Larrey","Henry Dunant"], correta:2 },
      { id:5, enunciado:"3º elo da cadeia de sobrevivência:", opcoes:["Chamada de emergência","Desfibrilação precoce","RCP precoce","Reconhecimento precoce"], correta:2 },
      { id:6, enunciado:"O técnico de enfermagem no APH deve:", opcoes:["Atuar de forma independente","Atuar sempre sob supervisão do enfermeiro dentro do escopo legal","Realizar SAV autonomamente","Definir destino da vítima"], correta:1 },
      { id:7, enunciado:"Quem gerencia a central de regulação médica?", opcoes:["Enfermeiro líder","Técnico sênior","Condutor socorrista","Médico regulador"], correta:3 },
      { id:8, enunciado:"Número do SAMU:", opcoes:["190","192","193","197"], correta:1 },
      { id:9, enunciado:"Lei 8.080/1990 é conhecida como:", opcoes:["Política Nacional de Urgências","Lei do SAMU","Lei Orgânica da Saúde","Regulamento de Ambulâncias"], correta:2 },
      { id:10, enunciado:"Sobre a cadeia de sobrevivência, é CORRETO:", opcoes:["Cada elo é independente","5º elo é RCP precoce","Ausência de qualquer elo compromete o resultado","DEA só após suporte avançado"], correta:2 },
  ]},
  2: { titulo: "Avaliação — Módulo 2: Legislação, Ética e Recusa de Atendimento", questoes: [
      { id:1, enunciado:"O adulto consciente e capaz tem direito de recusar atendimento pré-hospitalar?", opcoes:["Não — o socorrista deve atender independente da vontade da vítima","Sim — é direito da vítima, deve ser documentado e comunicado à regulação","Sim — mas apenas em emergências clínicas, nunca em traumas","Não — menor risco exige consentimento tácito"], correta:1 },
      { id:2, enunciado:"Ao receber recusa de atendimento, o socorrista deve:", opcoes:["Abandonar o local imediatamente","Documentar a recusa, informar riscos, comunicar à regulação e manter presença enquanto possível","Chamar a polícia para obrigar o atendimento","Atender à força para não ser responsabilizado"], correta:1 },
      { id:3, enunciado:"Em caso de menor de idade sem responsável presente com necessidade de atendimento urgente:", opcoes:["Aguardar responsável antes de qualquer intervenção","Atender com base no princípio da beneficência e comunicar ao Conselho Tutelar","Não atender — risco legal para o socorrista","Apenas estabilizar e aguardar ordem judicial"], correta:1 },
      { id:4, enunciado:"O sigilo profissional no APH determina que informações da ocorrência sejam compartilhadas:", opcoes:["Com qualquer familiar presente na cena","Apenas com a equipe de saúde receptora e conforme necessidade clínica","Com a imprensa se houver interesse público","Com vizinhos que pedirem informação"], correta:1 },
      { id:5, enunciado:"A Resolução COFEN 564/2017 (Código de Ética de Enfermagem) determina que o profissional:", opcoes:["Pode recusar atendimento em qualquer situação de risco","Deve prestar assistência de enfermagem sem discriminação de qualquer natureza","Atua exclusivamente sob ordens médicas sem autonomia própria","É isento de responsabilidade em emergências pré-hospitalares"], correta:1 },
      { id:6, enunciado:"A recusa de atendimento documentada deve conter:", opcoes:["Apenas o nome da vítima","Identificação, informações sobre riscos explicados, assinatura da vítima e testemunhas se possível","Somente a assinatura do médico regulador","Diagnóstico definitivo antes da recusa"], correta:1 },
      { id:7, enunciado:"Em vítima inconsciente sem responsável, o princípio ético que justifica o atendimento é:", opcoes:["Autonomia","Justiça","Beneficência e não-maleficência","Equidade"], correta:2 },
      { id:8, enunciado:"O socorrista que atende vítima contra sua vontade expressa (exceto incapazes) pode responder por:", opcoes:["Nada — estará protegido pelo dever de assistência","Constrangimento ilegal e lesão corporal","Apenas infração ética sem consequência penal","Abandono de incapaz"], correta:1 },
      { id:9, enunciado:"Tentativa de autoextermínio em vítima consciente que recusa atendimento:", opcoes:["Deve ter sua autonomia respeitada e o socorrista se retira","Exige avaliação de capacidade decisória — estado psíquico pode comprometer a autonomia; comunicar regulação médica","É tratada igual a qualquer recusa — documentar e sair","Justifica uso de força física para atender"], correta:1 },
      { id:10, enunciado:"A notificação compulsória no APH é obrigatória em:", opcoes:["Apenas óbitos na cena","Tentativas de autoextermínio, violência doméstica, maus-tratos e agravos de notificação pelo SINAN","Somente doenças infecciosas","Casos com mais de 3 vítimas"], correta:1 },
  ]},
  3: { titulo: "Avaliação — Módulo 3: As 3 Etapas do Atendimento", questoes: [
      { id:1, enunciado:"Sequência correta das 3 etapas:", opcoes:["Vítima → Cena → Intervenção","Cena → Vítima → Intervenção e transporte","Intervenção → Cena → Vítima","Anamnese → ABCDE → Transporte"], correta:1 },
      { id:2, enunciado:"Duração ideal da avaliação da cena:", opcoes:["1 a 2 minutos","10 a 30 segundos","5 minutos","Sem tempo definido"], correta:1 },
      { id:3, enunciado:"'Scoop and Run' é indicado para:", opcoes:["Vítimas estáveis","Vítimas instáveis que precisam de cirurgia — transporte imediato","Qualquer trauma","Ocorrências com 3+ vítimas"], correta:1 },
      { id:4, enunciado:"Avaliação secundária deve ser realizada:", opcoes:["Antes da primária","Somente após estabilizar problemas do ABCDE","Simultaneamente à primária sempre","Apenas no hospital"], correta:1 },
      { id:5, enunciado:"Na Etapa 3, comunicar o hospital receptor serve para:", opcoes:["É opcional","Permitir que o hospital se prepare com o quadro clínico e intervenções","Apenas informar número de vítimas","Somente em PCR"], correta:1 },
      { id:6, enunciado:"Vítima instável (PA 70x40, Glasgow 8): conduta na Etapa 3:", opcoes:["Avaliação secundária completa antes de transportar","Estabilizar o essencial e transportar imediatamente","Aguardar estabilização clínica antes de mover","Acesso venoso, ECG e SAMPLE completo antes de sair"], correta:1 },
      { id:7, enunciado:"SAMPLE significa:", opcoes:["Sinais vitais, Abdome, Membros, Pupilas, Lesões, Escala","Sinais/sintomas, Alergias, Medicações, Passado médico, Última refeição, Eventos","Segurança, Avaliação, Mecanismo, Pessoas, Local, Emergência","Situação, Anamnese, Monitorização, Pressão, Lesão, Encaminhamento"], correta:1 },
      { id:8, enunciado:"Qual cenário aplica corretamente as 3 etapas?", opcoes:["Abrir a porta e já aplicar ABCDE","Avaliar segurança → ABCDE → controlar hemorragia e transportar","Acionar SAMU, fazer anamnese e então avaliar a cena","Avaliar vítima, chamar reforço e verificar a cena por último"], correta:1 },
      { id:9, enunciado:"Erro mais comum na aplicação das 3 etapas:", opcoes:["Fazer primária antes da secundária","Pular avaliação da cena ou fazer secundária em vítima instável","Comunicar a regulação durante o atendimento","Usar SAMPLE em traumatizados"], correta:1 },
      { id:10, enunciado:"As 3 etapas são base dos protocolos:", opcoes:["ACLS, PALS e NRP apenas","PHTLS, ITLS, ACLS — todos os grandes sistemas de APH","Apenas do sistema brasileiro","Exclusivas do SAMU 192"], correta:1 },
  ]},
  4: { titulo: "Avaliação — Módulo 4: Deslocamento Seguro", questoes: [
      { id:1, enunciado:"A ambulância tem prioridade de passagem quando:", opcoes:["O condutor julgar necessário","Giroflex E sirene acionados simultaneamente","Apenas sirene acionada","Em qualquer emergência sem sinalização"], correta:1 },
      { id:2, enunciado:"Em cruzamento com sinal vermelho, o condutor deve:", opcoes:["Cruzar em velocidade máxima","Reduzir e certificar que todos os veículos pararam antes de cruzar","Usar giroflex sem sirene","Parar e aguardar verde"], correta:1 },
      { id:3, enunciado:"Posicionamento correto da ambulância na cena:", opcoes:["Paralela à calçada, longe da vítima","Em ângulo (30-45°) formando barreira de proteção entre equipe e tráfego","Atrás da vítima em relação ao tráfego","Qualquer posição pois o giroflex protege"], correta:1 },
      { id:4, enunciado:"Distância mínima em acidentes com risco de explosão:", opcoes:["5m","15m","30m","100m"], correta:2 },
      { id:5, enunciado:"Em acidente durante deslocamento, o condutor:", opcoes:["Está isento — estava em serviço de urgência","Responde civil e penalmente — urgência não exime responsabilidade","Só responde se a vítima transportada for afetada","É responsabilidade só do chefe da equipe"], correta:1 },
      { id:6, enunciado:"Posição da vítima em choque hipovolêmico no transporte:", opcoes:["Semi-sentada 45°","Decúbito lateral","Trendelenburg — exceto se houver TCE","Decúbito ventral"], correta:2 },
      { id:7, enunciado:"'O socorrista que chega são tem 100% de capacidade para atender' refere-se:", opcoes:["À importância de velocidade alta","À responsabilidade de cuidar da própria segurança no deslocamento","À obrigação de sirene em todos os deslocamentos","Ao EPI antes de sair da ambulância"], correta:1 },
      { id:8, enunciado:"Durante transporte de vítima grave, é obrigatório:", opcoes:["Apenas verificar pulso ao chegar","Monitorização contínua dos sinais vitais durante o trajeto","Verificar sinais vitais só se reclamar","Delegar monitorização ao condutor"], correta:1 },
      { id:9, enunciado:"Condução em piso molhado com ambulância:", opcoes:["Manter mesma velocidade","Reduzir velocidade e aumentar distância de frenagem","Usar só freio de mão","Aumentar velocidade para reduzir o risco"], correta:1 },
      { id:10, enunciado:"Passagem de caso ao hospital segue o protocolo:", opcoes:["Apenas nome e diagnóstico","SBAR: Situação, Background, Avaliação e Recomendação","Só mostrar a ficha preenchida","Dispensável se estável"], correta:1 },
  ]},
  5: { titulo: "Avaliação — Módulo 5: Equipamentos do APH", questoes: [
      { id:1, enunciado:"A cânula orofaríngea (Guedel) tem como função principal:", opcoes:["Ventilar ativamente a vítima","Impedir que a língua obstrua a via aérea","Aspirar secreções","Administrar oxigênio suplementar"], correta:1 },
      { id:2, enunciado:"O DEA (Desfibrilador Externo Automático) analisa o ritmo e:", opcoes:["Sempre aplica choque","Só aplica em ritmos chocáveis como FV e TV sem pulso","É indicado apenas para médicos","Substitui as compressões torácicas"], correta:1 },
      { id:3, enunciado:"O oxímetro de pulso mede:", opcoes:["Concentração de CO2","Saturação periférica de O2 (SpO2)","Frequência respiratória","Pressão parcial de O2 arterial"], correta:1 },
      { id:4, enunciado:"A bolsa-valva-máscara (BVM) deve fornecer volume de:", opcoes:["Máximo possível","500–600 mL suficientes para elevar o tórax no adulto","Acima de 1000 mL por ventilação","Igual ao adulto em qualquer peso"], correta:1 },
      { id:5, enunciado:"O torniquete CAT (Combat Application Tourniquet) deve ser aplicado:", opcoes:["Sobre a articulação mais próxima","5–7 cm acima do ferimento","Diretamente sobre a ferida","Apenas em membros inferiores"], correta:1 },
      { id:6, enunciado:"A prancha longa (longboard) é utilizada para:", opcoes:["Imobilização de membros inferiores isolada","Imobilização e transporte com suspeita de lesão de coluna","Transporte de vítimas em PCR refratária","Imobilização de fraturas de bacia somente"], correta:1 },
      { id:7, enunciado:"O colar cervical no APH:", opcoes:["Imobiliza completamente a coluna cervical sozinho","Limita movimentos como complemento à imobilização manual","Trata luxações cervicais na cena","É dispensável se a vítima estiver consciente"], correta:1 },
      { id:8, enunciado:"A máscara com reservatório (não reinalante) fornece concentração de O2 de:", opcoes:["24–28%","35–50%","60–70%","90–100%"], correta:3 },
      { id:9, enunciado:"A pinça de Magill é utilizada para:", opcoes:["Aspiração de secreções traqueobrônquicas","Remoção de corpo estranho visível na via aérea sob visão direta com laringoscópio","Fixação de tubos orotraqueais","Medição de pressão de balão do cuff"], correta:1 },
      { id:10, enunciado:"O KED (Kendrick Extrication Device) é indicado para:", opcoes:["Imobilização de fraturas de pelve","Extricação de vítima presa em veículo sem mobilizar a coluna","Transporte de vítimas em PCR","Imobilização de membros inferiores em campo"], correta:1 },
  ]},
  6: { titulo: "Avaliação — Módulo 6: Tipos de Transporte", questoes: [
      { id:1, enunciado:"Ambulância Tipo B (Suporte Básico de Vida) é destinada a:", opcoes:["Transporte de pacientes com risco de vida em SAV","Transporte inter-hospitalar de pacientes estáveis e APH básico","Apenas transporte neonatal","Exclusivamente transporte aeromédico"], correta:1 },
      { id:2, enunciado:"A ambulância Tipo C (Portaria MS 2.048/2002) destina-se a:", opcoes:["Transporte neonatal de alto risco","Resgate e salvamento de vítimas em qualquer situação","Suporte avançado de vida com médico a bordo","Apenas transporte de pacientes estáveis entre hospitais"], correta:1 },
      { id:3, enunciado:"O transporte aeromédico por helicóptero é indicado quando:", opcoes:["Qualquer ocorrência com mais de 2 vítimas","Distâncias longas ou terrenos inacessíveis com vítima instável grave","Apenas em catástrofes com mais de 10 vítimas","Somente para transporte neonatal"], correta:1 },
      { id:4, enunciado:"O transporte fluvial no APH é relevante principalmente:", opcoes:["Nas capitais com rios navegáveis como Manaus e Belém e áreas de difícil acesso","Apenas em inundações","Em qualquer cidade com córregos","É obsoleto e não utilizado mais"], correta:0 },
      { id:5, enunciado:"Para vítima com suspeita de TCE grave, o posicionamento no transporte deve ser:", opcoes:["Trendelenburg (MI elevados)","Cabeceira elevada a 30° (posição anti-Trendelenburg)","Decúbito lateral de segurança","Decúbito ventral"], correta:1 },
      { id:6, enunciado:"A regulação médica define o destino da vítima com base em:", opcoes:["Preferência da família","Hospital mais próximo sempre","Quadro clínico, recursos necessários e capacidade do hospital receptor","Decisão do condutor da ambulância"], correta:2 },
      { id:7, enunciado:"No transporte de vítima em PCR, as compressões torácicas devem:", opcoes:["Ser interrompidas durante o transporte","Ser mantidas — dispositivos mecânicos garantem qualidade em movimento","Ser realizadas apenas na chegada ao hospital","Ser substituídas por ventilação passiva"], correta:1 },
      { id:8, enunciado:"A maca de ambulância deve ser fixada antes do transporte para:", opcoes:["Facilitar a saída rápida no destino","Evitar deslocamento em frenagens e curvas que agravem o quadro da vítima","Reduzir o peso total da ambulância","Permitir monitorização mais fácil pela equipe"], correta:1 },
      { id:9, enunciado:"Transporte neonatal de alto risco exige:", opcoes:["Ambulância Tipo B com médico","Unidade de Terapia Intensiva Neonatal Móvel (UTI-NEO) — Tipo E","Qualquer ambulância com incubadora improvisada","Apenas condução rápida sem equipamentos especiais"], correta:1 },
      { id:10, enunciado:"O princípio 'load and go' no transporte de trauma refere-se a:", opcoes:["Carregar todo equipamento antes de atender","Transportar rapidamente vítimas instáveis sem demorar na cena","Aguardar o médico regular para decidir o destino","Realizar todos os procedimentos antes de iniciar o transporte"], correta:1 },
  ]},
  7: { titulo: "Avaliação — Módulo 7: Avaliação da Cena", questoes: [
      { id:1, enunciado:"PRIMEIRA atitude ao chegar em uma cena:", opcoes:["Iniciar avaliação da vítima","Acionar SAMU pelo rádio","Avaliar segurança da cena","Aplicar EPI e aproximar"], correta:2 },
      { id:2, enunciado:"Cinemática do trauma estuda:", opcoes:["Velocidade de resposta do SAMU","Forças que atuam sobre o corpo durante evento traumático","Tempo de transporte ao hospital","Protocolos de triagem"], correta:1 },
      { id:3, enunciado:"Impacto frontal em veículo causa lesões principalmente em:", opcoes:["Bacia, fêmur e costelas laterais","Calcâneos, coluna lombar e punho","Região cervical, esterno, tórax e joelhos","Ouvidos, pulmões e estilhaços"], correta:2 },
      { id:4, enunciado:"IMV (Incidente de Múltiplas Vítimas) caracteriza-se por:", opcoes:["Qualquer ocorrência com mais de 1 vítima","Mais de 5 vítimas superando capacidade da equipe","Apenas acidentes aéreos","Ocorrências com vítimas em PCR"], correta:1 },
      { id:5, enunciado:"A avaliação de segurança da cena deve ser:", opcoes:["Apenas ao chegar","Uma vez antes de entrar","Contínua durante todo o atendimento","Só quando há risco de incêndio"], correta:2 },
      { id:6, enunciado:"SBAR na comunicação com regulação significa:", opcoes:["Segurança, Básico, Avançado, Regulação","Situação, Background, Avaliação, Recomendação","Sinais vitais, Balanço, Atendimento, Resultado","Suporte, Básico, Assistência, Resposta"], correta:1 },
      { id:7, enunciado:"EPI no APH:", opcoes:["Opcional em clínicas","Só em trauma com sangramento","Obrigatório em todo atendimento","Luvas são suficientes"], correta:2 },
      { id:8, enunciado:"Impressão geral da vítima é:", opcoes:["Avaliação detalhada de cada sistema","Avaliação visual rápida nos primeiros segundos antes de tocar","O mesmo que ABCDE","Análise dos sinais vitais completos"], correta:1 },
      { id:9, enunciado:"Em IMV, prioridade do socorrista:", opcoes:["Primeira vítima encontrada","Maior bem para o maior número","Aguardar reforço antes de qualquer atendimento","PCR primeiro sempre"], correta:1 },
      { id:10, enunciado:"Mecanismo de alta energia implica:", opcoes:["Lesões leves","Presunção de lesões graves até prova em contrário","Imobilização só se houver dor","Não precisa comunicar regulação"], correta:1 },
  ]},
  8: { titulo: "Avaliação — Módulo 8: Avaliação da Vítima", questoes: [
      { id:1, enunciado:"No XABCDE do trauma (PHTLS 10ª ed.), o 'X' representa:", opcoes:["Exposição completa do corpo","Controle de hemorragia exsanguinante — ANTES da via aérea","Exame neurológico completo","Raio-X na cena"], correta:1 },
      { id:2, enunciado:"Glasgow avalia:", opcoes:["FC, PA e saturação","Abertura ocular, resposta verbal e motora","Dor, coloração e temperatura","Apenas consciência em crianças"], correta:1 },
      { id:3, enunciado:"Pontuação máxima de Glasgow:", opcoes:["10","12","15","18"], correta:2 },
      { id:4, enunciado:"'C' no ABCDE:", opcoes:["Consciência","Cervical","Circulação com controle de hemorragia","Compressão torácica"], correta:2 },
      { id:5, enunciado:"FR normal em adultos:", opcoes:["6–10 irpm","12–20 irpm","22–30 irpm","Acima de 30 irpm"], correta:1 },
      { id:6, enunciado:"Avaliação secundária deve ser iniciada:", opcoes:["Antes da primária","Somente após estabilizar ameaças identificadas no ABCDE","Simultaneamente à primária sempre","Apenas no hospital"], correta:1 },
      { id:7, enunciado:"Glasgow 3 indica:", opcoes:["Consciente e orientada","Confusão leve","Pior resposta — ausência total","Sonolência moderada"], correta:2 },
      { id:8, enunciado:"PA normal em adultos:", opcoes:["80x50 mmHg","100x60 mmHg","120x80 mmHg","150x100 mmHg"], correta:2 },
      { id:9, enunciado:"'D' no ABCDE avalia:", opcoes:["Deformidades ósseas","Disfunção neurológica — consciência e pupilas","Débito urinário","Dor abdominal"], correta:1 },
      { id:10, enunciado:"SAMPLE significa:", opcoes:["Sinais vitais, Alergias, Medicamentos, Patologias, Local, Eventos","Sinais/sintomas, Alergias, Medicações, Passado médico, Última refeição, Eventos","Sexo, Anamnese, Medicações, Pressão, Local, Escala","Sintomas, Acesso, Monitorização, Posicionamento, Lesões, Evacuação"], correta:1 },
  ]},
  9: { titulo: "Avaliação — Módulo 9: Suporte Básico de Vida", questoes: [
      { id:1, enunciado:"Frequência de compressões no adulto em PCR:", opcoes:["60–80/min","80–100/min","100–120/min","Acima de 140/min"], correta:2 },
      { id:2, enunciado:"Relação compressão:ventilação sem via aérea avançada:", opcoes:["15:2","30:2","30:1","50:2"], correta:1 },
      { id:3, enunciado:"Profundidade das compressões no adulto:", opcoes:["2–3 cm","Pelo menos 5 cm (máx 6 cm)","7–8 cm","Qualquer profundidade que gere pulso"], correta:1 },
      { id:4, enunciado:"Após chamar ajuda e identificar PCR, primeira conduta:", opcoes:["DEA imediato","Ventilação boca a boca","Iniciar compressões torácicas","Verificar glicemia"], correta:2 },
      { id:5, enunciado:"DEA aplica choque em:", opcoes:["Sempre independente do ritmo","Só em ritmos chocáveis: FV e TV sem pulso","Apenas para médicos e enfermeiros","Substitui a necessidade de compressões"], correta:1 },
      { id:6, enunciado:"Fibrilação Ventricular é:", opcoes:["Ritmo regular lento","Atividade elétrica sem pulso","Ritmo caótico que impede contração eficaz","Bradicardia extrema"], correta:2 },
      { id:7, enunciado:"Após choque com DEA, deve-se:", opcoes:["Verificar pulso por 1 minuto","Reiniciar imediatamente as compressões","Aguardar DEA analisar antes de comprimir","Ventilar 5 vezes antes de comprimir"], correta:1 },
      { id:8, enunciado:"Ritmo NÃO chocável pelo DEA:", opcoes:["Fibrilação Ventricular","TV sem pulso","Assistolia","TV com pulso"], correta:2 },
      { id:9, enunciado:"RCP de alta qualidade inclui:", opcoes:["Compressões lentas","Pausas frequentes para checar pulso","Compressões fortes, rápidas com retorno completo do tórax","Ventilação a cada 5 compressões sempre"], correta:2 },
      { id:10, enunciado:"Em crianças menores de 8 anos o DEA deve:", opcoes:["Não ser utilizado","Ser utilizado com pás pediátricas ou modo pediátrico","Ser igual ao adulto sem adaptações","Só por médicos"], correta:1 },
  ]},
  10: { titulo: "Avaliação — Módulo 10: Atualização AHA 2025", questoes: [
      { id:1, enunciado:"Segundo as diretrizes AHA 2025, a frequência ideal de compressões torácicas no adulto é:", opcoes:["80–100/min","100–120/min","120–140/min","60–80/min"], correta:1 },
      { id:2, enunciado:"A AHA 2025 reforça que em PCR por afogamento, a abordagem inicial prioriza:", opcoes:["DEA antes de qualquer outra ação","5 ventilações de resgate antes de iniciar compressões","Compressões imediatas sem ventilação","Aguardar médico para iniciar RCP"], correta:1 },
      { id:3, enunciado:"Segundo a AHA 2025, em OVACE com vítima inconsciente, a varredura digital:", opcoes:["Deve ser feita a cada 2 compressões","Só se o objeto estiver visível — varredura cega está abolida","É recomendada em todos os casos","Deve ser feita antes de iniciar compressões"], correta:1 },
      { id:4, enunciado:"As diretrizes AHA 2025 recomendam para cuidados pós-PCR:", opcoes:["Alta precoce se sinais vitais estáveis","Hipotermia terapêutica em todos os pacientes","Controle direcionado da temperatura (CDT) e suporte neurológico especializado","Evitar qualquer monitorização nas primeiras 24h"], correta:2 },
      { id:5, enunciado:"A AHA 2025 em relação ao uso de adrenalina na PCR:", opcoes:["Foi removida dos protocolos","Mantida: 1 mg IV/IO a cada 3–5 min, com ênfase em administração precoce","Aumentada para 2 mg a cada 2 min","Substituída por amiodarona como primeira escolha"], correta:1 },
      { id:6, enunciado:"Regarding compressões em lactente segundo AHA 2025:", opcoes:["Apenas 2 dedos no centro do tórax em qualquer situação","2 dedos (1 socorrista) ou 2 polegares com mãos circundando o tórax (2 socorristas — mais eficaz)","Técnica de 1 mão igual à criança maior","Profundidade de 2 cm máximo"], correta:1 },
      { id:7, enunciado:"A AHA 2025 reforça que o tempo máximo para verificação de pulso antes de iniciar RCP é:", opcoes:["30 segundos","20 segundos","10 segundos","5 segundos"], correta:2 },
      { id:8, enunciado:"Sobre o uso de O2 durante RCP, a AHA 2025 recomenda:", opcoes:["O2 a 2L/min por cateter nasal","O2 a 100% enquanto durar a PCR","Evitar O2 suplementar para não causar hiperóxia","O2 apenas após retorno da circulação"], correta:1 },
      { id:9, enunciado:"A AHA 2025 sobre a profundidade das compressões em crianças (1–8 anos):", opcoes:["Pelo menos 5 cm como no adulto","Aproximadamente 1/3 do diâmetro anteroposterior do tórax","2 cm máximo para não lesar órgãos","4 cm em qualquer criança"], correta:1 },
      { id:10, enunciado:"A maior mudança da AHA 2025 em relação às versões anteriores inclui:", opcoes:["Abolição do DEA em crianças","Maior ênfase em compressões de alta qualidade, minimização de pausas e cuidados pós-PCR integrados","Substituição da adrenalina por vasopressina","Ventilação antes das compressões em adultos"], correta:1 },
  ]},
  11: { titulo: "Avaliação — Módulo 11: Via Aérea e Ventilação", questoes: [
      { id:1, enunciado:"Hiperextensão da cabeça com elevação do queixo é contraindicada em:", opcoes:["Idosos","Suspeita de trauma cervical","Crianças abaixo de 5 anos","Qualquer inconsciente"], correta:1 },
      { id:2, enunciado:"Cânula orofaríngea tem como objetivo:", opcoes:["Ventilar ativamente","Impedir língua de obstruir via aérea","Aspirar secreções","Administrar O2"], correta:1 },
      { id:3, enunciado:"Volume corrente com BVM no adulto:", opcoes:["Máximo possível","500–600 mL — suficiente para elevar tórax","Acima de 1000 mL","Igual ao adulto independente do peso"], correta:1 },
      { id:4, enunciado:"Sinal universal de engasgo em vítima consciente:", opcoes:["Tosse eficaz e forte","Mãos no pescoço","Respiração normal com agitação","Palidez isolada"], correta:1 },
      { id:5, enunciado:"Manobra de Heimlich indicada para:", opcoes:["Vítima em PCR","OVACE grave em vítima consciente","Qualquer dificuldade respiratória","Vítimas com trauma torácico"], correta:1 },
      { id:6, enunciado:"Oximetria de pulso mede:", opcoes:["CO2 no sangue","SpO2 — saturação periférica de O2","Frequência respiratória","PaO2 arterial"], correta:1 },
      { id:7, enunciado:"SpO2 abaixo de quanto requer intervenção imediata:", opcoes:["98%","95%","92%","88%"], correta:1 },
      { id:8, enunciado:"Abertura de via aérea em trauma cervical:", opcoes:["Hiperextensão","Tração mandibular (jaw thrust)","Cânula nasofaríngea imediata","IOT sem sedação"], correta:1 },
      { id:9, enunciado:"Pneumotórax hipertensivo reconhecido por:", opcoes:["Tosse produtiva e febre","Desvio de traqueia, ausência de MV e hipotensão","Apenas por RX","Dor lombar irradiada"], correta:1 },
      { id:10, enunciado:"Com via aérea avançada, a relação de ventilação:", opcoes:["30:2 contínuo","1 ventilação a cada 6 segundos (10/min) assíncrona às compressões","1 ventilação a cada 15 compressões","Parar compressões a cada 2 ventilações"], correta:1 },
  ]},
  12: { titulo: "Avaliação — Módulo 12: Controle de Hemorragias", questoes: [
      { id:1, enunciado:"Método mais eficaz para hemorragia externa:", opcoes:["Torniquete em todos os casos","Pressão direta sobre o ferimento","Elevação sem compressão","Curativo frouxo"], correta:1 },
      { id:2, enunciado:"Torniquete indicado em:", opcoes:["Qualquer laceração","Hemorragia grave em membro que não responde à pressão direta","Ferimentos no tórax","Epistaxe intensa"], correta:1 },
      { id:3, enunciado:"Choque hipovolêmico causado por:", opcoes:["Falência cardíaca primária","Perda significativa de volume sanguíneo","Reação alérgica grave","Lesão medular cervical"], correta:1 },
      { id:4, enunciado:"Sinais precoces de choque hemorrágico:", opcoes:["Hipotensão grave e inconsciência","Taquicardia, pele fria e pálida, ansiedade","Bradicardia e rubor","Hipertensão e confusão"], correta:1 },
      { id:5, enunciado:"Ao aplicar torniquete deve-se:", opcoes:["Cobri-lo com curativo","Anotar em local visível e registrar o horário","Afrouxar a cada 20 min","Aplicar sempre abaixo do joelho ou cotovelo"], correta:1 },
      { id:6, enunciado:"Penso oclusivo de 3 lados indicado em:", opcoes:["Feridas abdominais evisceradas","Feridas penetrantes no tórax (pneumotórax aberto)","Qualquer laceração profunda","Amputações traumáticas"], correta:1 },
      { id:7, enunciado:"Hemorragia interna grave: suspeitar quando:", opcoes:["Apenas dor localizada","Sinais de choque sem sangramento externo visível","Mecanismo de baixa energia","Sangramento visível menor que 500 mL"], correta:1 },
      { id:8, enunciado:"Volume de sangue em adulto de 70 kg:", opcoes:["2 litros","3,5 litros","5–6 litros","8 litros"], correta:2 },
      { id:9, enunciado:"Choque classe IV — perda de volume:", opcoes:["Até 15%","15–30%","30–40%",">40% (>2000 mL)"], correta:3 },
      { id:10, enunciado:"Sangramento em virilha, axila ou pescoço:", opcoes:["Torniquete de preferência","Gaze hemostática + tamponamento — torniquete impossível nessas regiões","Apenas pressão externa","Aguardar SAV para conduta"], correta:1 },
  ]},
  13: { titulo: "Avaliação — Módulo 13: Trauma", questoes: [
      { id:1, enunciado:"'X' no XABCDE representa:", opcoes:["Exame neurológico","Controle de hemorragia exsanguinante antes da via aérea","Exposição total","RX na cena"], correta:1 },
      { id:2, enunciado:"Imobilização cervical deve ser feita:", opcoes:["Apenas com dor cervical relatada","Em toda vítima de trauma com mecanismo suspeito até descarte radiológico","Só em impactos acima de 80 km/h","Só em inconscientes"], correta:1 },
      { id:3, enunciado:"TCE grave é definido por Glasgow:", opcoes:["Menor ou igual a 13","Menor ou igual a 8","Entre 9 e 12","Qualquer Glasgow com perda de consciência"], correta:1 },
      { id:4, enunciado:"Tríade de Beck sugere:", opcoes:["Pneumotórax hipertensivo","Tamponamento cardíaco","Hemotórax maciço","Contusão miocárdica"], correta:1 },
      { id:5, enunciado:"Fratura de fêmur: perda sanguínea de até:", opcoes:["200 mL","500 mL","1500–2000 mL","Acima de 3000 mL sempre"], correta:2 },
      { id:6, enunciado:"Evisceração abdominal: conduta correta:", opcoes:["Reposição das alças e curativo seco","Curativo úmido estéril sem reposição das alças","Torniquete abdominal","Lavagem com soro"], correta:1 },
      { id:7, enunciado:"No TCE grave, devem ser evitados a qualquer custo:", opcoes:["Monitorização e acesso venoso","Hipotensão e hipóxia — causas de lesão cerebral secundária","O2 suplementar acima de 95%","Imobilização cervical"], correta:1 },
      { id:8, enunciado:"Crush Syndrome ocorre quando:", opcoes:["Fratura exposta com sangramento","Músculos comprimidos liberam mioglobina ao serem descomprimidos","Queimadura elétrica profunda","Trauma penetrante abdominal múltiplo"], correta:1 },
      { id:9, enunciado:"KED (Kendrick) é usado para:", opcoes:["Imobilização de pelve","Extricação de vítima presa em veículo sem mobilizar coluna","Transporte em PCR refratária","Imobilização de MMII em campo"], correta:1 },
      { id:10, enunciado:"Fratura de pelve: conduta no APH:", opcoes:["Testar estabilidade repetidamente para confirmar","Cinto pélvico ou lençol — não testar estabilidade repetidamente","Apenas analgesia e transporte","Elevação dos membros inferiores"], correta:1 },
  ]},
  14: { titulo: "Avaliação — Módulo 14: Queimaduras", questoes: [
      { id:1, enunciado:"A Regra dos Nove classifica queimaduras por:", opcoes:["Profundidade das lesões","Superfície corporal queimada (%SCQ)","Agente causador","Temperatura do agente"], correta:1 },
      { id:2, enunciado:"Queimadura de 2º grau profunda caracteriza-se por:", opcoes:["Eritema sem bolhas, dor intensa","Bolhas, base pálida ou avermelhada, dor presente ou reduzida","Carbonização, indolor, comprometimento total da pele","Apenas eritema com edema leve"], correta:1 },
      { id:3, enunciado:"Em queimadura química, a conduta inicial é:", opcoes:["Aplicar neutralizante químico oposto","Lavar com água corrente em abundância por no mínimo 20 minutos","Cobrir com curativo seco imediatamente","Aplicar creme ou pasta protetora"], correta:1 },
      { id:4, enunciado:"Queimadura por inalação deve ser suspeitada quando:", opcoes:["Apenas queimaduras faciais visíveis","Fuligem nas narinas, sobrancelhas chamuscadas, rouquidão, dispneia em vítima de incêndio em ambiente fechado","Dor torácica isolada","Tosse seca sem outros achados"], correta:1 },
      { id:5, enunciado:"Em queimadura elétrica, a prioridade no APH é:", opcoes:["Resfriar o local com água gelada","Garantir segurança da cena e desligar a fonte antes de aproximar — risco de choque para o socorrista","Remover roupas imediatamente com as mãos","Aplicar torniquete no membro afetado"], correta:1 },
      { id:6, enunciado:"A fórmula de Parkland para reposição volêmica em queimados usa:", opcoes:["Ringer Lactato: 2 mL x peso(kg) x %SCQ nas primeiras 24h","SF 0,9%: 4 mL x peso x %SCQ total","Ringer Lactato: 4 mL x peso(kg) x %SCQ nas primeiras 24h","Dextrose 5%: 2 mL x peso x %SCQ"], correta:2 },
      { id:7, enunciado:"Queimaduras que sempre exigem internação incluem:", opcoes:["Qualquer queimadura de 1º grau extensa","Queimaduras de 2º grau >10% em adultos, qualquer grau em face, mãos, pés ou genitália, queimaduras de 3º grau","Apenas queimaduras de 3º grau acima de 50% SCQ","Queimaduras de 1º grau em crianças menores de 5 anos"], correta:1 },
      { id:8, enunciado:"NÃO se deve fazer em queimaduras no APH:", opcoes:["Resfriar com água em temperatura ambiente","Remover roupas soltas que não estejam aderidas","Aplicar gelo, manteiga, pasta dental ou qualquer produto caseiro","Cobrir com curativo não aderente"], correta:2 },
      { id:9, enunciado:"Queimadura de 1º grau caracteriza-se por:", opcoes:["Bolhas e dor intensa","Apenas eritema (vermelhidão) sem bolhas, dor ao toque","Carbonização e ausência de dor","Perda de toda a espessura da pele"], correta:1 },
      { id:10, enunciado:"Queimaduras circunferenciais em membros ou tórax representam risco de:", opcoes:["Apenas infecção local","Síndrome compartimental em membros e restrição respiratória no tórax","Sepse precoce nas primeiras horas","Apenas cicatriz hipertrófica"], correta:1 },
  ]},
  15: { titulo: "Avaliação — Módulo 15: Afogamento", questoes: [
      { id:1, enunciado:"Afogamento é definido como:", opcoes:["Morte por imersão em qualquer líquido","Processo de comprometimento respiratório por submersão ou imersão em líquido — pode ou não resultar em morte","Apenas óbitos por submersão","Inalação de qualquer líquido nos pulmões"], correta:1 },
      { id:2, enunciado:"Segundo a classificação de Szpilman, vítima de afogamento Grau 1 apresenta:", opcoes:["Parada cardiorrespiratória","Tosse sem espuma — via aérea mantida","Espuma na boca e nariz com PCR","Inconsciência com respiração mantida"], correta:1 },
      { id:3, enunciado:"A RCP em vítima de afogamento difere do padrão porque:", opcoes:["Não se deve ventilar — apenas compressões","Inicia-se com 5 ventilações de resgate antes das compressões — hipóxia é a causa primária","O DEA é aplicado antes de qualquer ventilação","Compressões torácicas são contraindicadas na água"], correta:1 },
      { id:4, enunciado:"Em resgate de vítima de afogamento, a segurança do socorrista exige:", opcoes:["Entrar na água em qualquer situação para salvar a vítima","Usar EPI aquático, corda de segurança ou boia — nunca entrar sem equipamento em corrente forte","Nadar até a vítima e puxá-la pelos cabelos","Aguardar a vítima chegar às margens"], correta:1 },
      { id:5, enunciado:"A proteção cervical em vítima de afogamento é obrigatória:", opcoes:["Em todos os casos de afogamento","Apenas quando houver história de mergulho em água rasa ou trauma associado","Nunca — a água protege a coluna","Apenas em crianças"], correta:1 },
      { id:6, enunciado:"Hipotermia em vítima de afogamento em água fria:", opcoes:["Contraindica a RCP","Exige RCP contínua — 'não está morto até estar quente e morto'","Indica aplicação de DEA imediatamente sem RCP","Melhora o prognóstico sempre"], correta:1 },
      { id:7, enunciado:"Após resgate, vítima de afogamento com SpO2 < 92% deve receber:", opcoes:["Apenas observação sem O2 suplementar","O2 suplementar de alto fluxo e suporte ventilatório conforme necessário","Apenas ventilação sem O2 suplementar","Aguardar avaliação hospitalar antes de O2"], correta:1 },
      { id:8, enunciado:"'Drowned but not dead' refere-se a:", opcoes:["Vítimas declaradas mortas no local sem tentativa de RCP","Conceito que reforça RCP prolongada em afogamento com hipotermia — recuperações após longos períodos são possíveis","Vítimas que sobrevivem sem sequelas neurológicas","Afogamento com recuperação espontânea"], correta:1 },
      { id:9, enunciado:"A manobra de Heimlich para retirar água dos pulmões em afogados:", opcoes:["É recomendada antes de iniciar a RCP","Está contraindicada — não há evidência de benefício e atrasa a RCP","Deve ser feita em todos os afogados inconscientes","É indicada apenas em crianças"], correta:1 },
      { id:10, enunciado:"Classificação de Szpilman Grau 6 (PCR) em afogamento indica:", opcoes:["Boa chance de sobrevida com RCP precoce","Prognóstico muito grave — RCP deve ser iniciada imediatamente e mantida até o hospital","Alta hospitalar em menos de 24h","Apenas cuidados de suporte sem RCP"], correta:1 },
  ]},
  16: { titulo: "Avaliação — Módulo 16: Emergências Clínicas", questoes: [
      { id:1, enunciado:"Sinais e sintomas de IAM:", opcoes:["Dor em facada, febre e tosse","Dor precordial opressiva, irradiação ao braço esquerdo, sudorese e náusea","Dor pleurítica, dispneia e hemoptise","Palpitação isolada"], correta:1 },
      { id:2, enunciado:"AVC reconhecido pelo FAST:", opcoes:["Febre, Arritmia, Sudorese, Tontura","Face (assimetria), Arm (braço caído), Speech (fala), Time (tempo)","Frequência, Alteração de consciência, Saturação, Temperatura","Força, Ataxia, Sensação, Tremor"], correta:1 },
      { id:3, enunciado:"Hipoglicemia grave com vítima inconsciente:", opcoes:["Suco de laranja pela boca","Glicose 50% IV ou glucagon IM","Insulina regular de correção","SF em grande volume"], correta:1 },
      { id:4, enunciado:"Crise convulsiva: conduta NÃO deve incluir:", opcoes:["Proteger de lesões","Posição lateral após crise","Colocar objeto rígido entre os dentes","Monitorar duração"], correta:2 },
      { id:5, enunciado:"Anafilaxia grave: medicamento de 1ª escolha:", opcoes:["Corticoide venoso","Adrenalina IM","Anti-histamínico oral","Broncodilatador inalatório"], correta:1 },
      { id:6, enunciado:"Status epilepticus: convulsão com duração superior a:", opcoes:["2 minutos","5 minutos","10 minutos","30 minutos"], correta:1 },
      { id:7, enunciado:"Emergência hipertensiva no APH:", opcoes:["Anti-hipertensivo oral imediato","Aguardar redução espontânea","Transporte rápido com monitorização e acesso venoso","Nifedipina sublingual para reduzir PA em 1h"], correta:2 },
      { id:8, enunciado:"Insuficiência respiratória aguda:", opcoes:["Bradipneia, pele rosada, SpO2 >98%","Dispneia, musculatura acessória, cianose, SpO2 <92%","Apenas tosse seca","Hipertensão e bradicardia isoladas"], correta:1 },
      { id:9, enunciado:"Dor abdominal aguda grave: não oferecer:", opcoes:["Avaliação e monitorização","Transporte imediato","Líquidos ou alimentos pela boca","Acesso venoso"], correta:2 },
      { id:10, enunciado:"No APH, AVC isquêmico vs hemorrágico:", opcoes:["Impossível diferenciar clinicamente — ambos exigem TC","PA sempre diferencia","Hemorrágico nunca causa déficit motor","Isquêmico sempre causa convulsões"], correta:0 },
  ]},
  17: { titulo: "Avaliação — Módulo 17: Agitação Psicomotora", questoes: [
      { id:1, enunciado:"Agitação psicomotora no APH é definida como:", opcoes:["Qualquer recusa de atendimento pelo paciente","Estado de hiperatividade motora e verbal com comprometimento da cooperação, podendo representar risco à segurança","Apenas sintoma de transtorno psiquiátrico prévio","Comportamento agressivo exclusivamente em usuários de drogas"], correta:1 },
      { id:2, enunciado:"A causa mais frequente de agitação psicomotora no APH é:", opcoes:["Transtorno bipolar em crise","Intoxicação por álcool e/ou outras substâncias psicoativas","Demência avançada","Privação de sono"], correta:1 },
      { id:3, enunciado:"Antes de qualquer intervenção em vítima agitada, deve-se:", opcoes:["Imobilizar fisicamente para garantir segurança","Garantir segurança da cena, equipe e vítima — avaliar causa orgânica reversível","Administrar sedativo imediatamente","Chamar a polícia e aguardar"], correta:1 },
      { id:4, enunciado:"Causas orgânicas reversíveis de agitação que devem ser descartadas:", opcoes:["Apenas uso de drogas","Hipoglicemia, hipóxia, TCE, intoxicações, infecções graves (sepse), distúrbios metabólicos","Apenas distúrbios psiquiátricos","Hipertensão arterial isolada"], correta:1 },
      { id:5, enunciado:"A contenção física de vítima agitada no APH deve ser:", opcoes:["Realizada por um socorrista para não intimidar","Com número suficiente de pessoas (mínimo 4-5), posição de decúbito dorsal com membros imobilizados","Em posição prona (barriga para baixo) por maior segurança","Evitada em qualquer situação"], correta:1 },
      { id:6, enunciado:"Contenção em posição prona (barriga para baixo) em agitado é:", opcoes:["A posição mais segura para a equipe","Contraindicada — risco de morte por asfixia posicional","Indicada em usuários de drogas","Recomendada se a contenção dorsal falhar"], correta:1 },
      { id:7, enunciado:"Síndrome de excitação aguda (Excited Delirium Syndrome — ExDS) caracteriza-se por:", opcoes:["Depressão e bradipneia","Agitação extrema, hipertermia, força supra-normal, insensibilidade à dor — alto risco de PCR súbita","Apenas alucinações visuais","Bradicardia e hipotensão"], correta:1 },
      { id:8, enunciado:"A comunicação com vítima agitada consciente deve ser:", opcoes:["Autoritária e em voz alta para mostrar controle","Calma, clara, respeitosa e não ameaçadora — estabelecer rapport antes de qualquer intervenção física","Técnica e fria para não criar vínculo","Evitada — qualquer fala pode piorar a agitação"], correta:1 },
      { id:9, enunciado:"Após contenção física de vítima agitada, o monitoramento deve incluir:", opcoes:["Apenas verificação de pulso na chegada ao hospital","Monitorização contínua de sinais vitais, nível de consciência, coloração e respiração durante todo o transporte","Observação apenas visual sem contato físico","Verificação de sinais vitais a cada 30 minutos"], correta:1 },
      { id:10, enunciado:"Sedação farmacológica em vítima agitada no APH:", opcoes:["Pode ser realizada por qualquer membro da equipe","É prerrogativa médica ou conforme protocolo regulado — administração sem prescrição é prática ilegal","É sempre contraindicada no ambiente pré-hospitalar","Deve ser feita antes de qualquer tentativa de comunicação"], correta:1 },
  ]},
  18: { titulo: "Avaliação — Módulo 18: Animais Peçonhentos", questoes: [
      { id:1, enunciado:"Conduta CORRETA após picada de serpente no APH:", opcoes:["Torniquete acima da picada","Incisar e sugar o local","Imobilizar o membro e transportar para soroterapia","Gelo diretamente no local"], correta:2 },
      { id:2, enunciado:"Soro antiofídico é administrado:", opcoes:["Na cena pelo socorrista","No serviço de saúde com capacidade para tratar reações adversas","Apenas por intensivista","Só com certeza da espécie"], correta:1 },
      { id:3, enunciado:"Bothrops (jararaca) causa principalmente:", opcoes:["Paralisia e ptose palpebral","Ação coagulante, necrosante e hemorrágica","Neurotoxicidade pura","Hemólise sem alteração local"], correta:1 },
      { id:4, enunciado:"Picada de escorpião em criança pequena é:", opcoes:["Sempre baixo risco","Emergência médica com risco de morte","Urgência apenas com dor intensa","Risco só se for escorpião preto"], correta:1 },
      { id:5, enunciado:"Aranha-marrom (Loxosceles): sinal característico:", opcoes:["Dor imediata intensa e paralisia","Lesão necrótica de evolução lenta com halo avermelhado","Convulsão e PCR","Hematomas generalizados"], correta:1 },
      { id:6, enunciado:"NÃO deve ser realizado em picada de serpente:", opcoes:["Imobilizar o membro","Manter em repouso","Torniquete, corte ou sucção","Comunicar SAMU"], correta:2 },
      { id:7, enunciado:"Serpente de maior letalidade no Brasil:", opcoes:["Jararaca (Bothrops)","Surucucu (Lachesis)","Cascavel (Crotalus)","Coral (Micrurus)"], correta:2 },
      { id:8, enunciado:"Picada de abelha com anafilaxia:", opcoes:["Retirar ferrão e aguardar","Adrenalina IM + acesso venoso + transporte imediato","Anti-histamínico oral e observar 1h","Corticoide IM como 1ª escolha"], correta:1 },
      { id:9, enunciado:"CIATOX:", opcoes:["192","190","0800 722 6001","0800 644 6001"], correta:2 },
      { id:10, enunciado:"Arraias de água doce: tratamento específico:", opcoes:["Gelo direto no local","Mergulhar em água quente (42-45°C) por 30-90 min — veneno termolábil","Torniquete proximal","Aspiração do veneno com seringa"], correta:1 },
  ]},
  19: { titulo: "Avaliação — Módulo 19: Tentativa de Autoextermínio", questoes: [
      { id:1, enunciado:"PRIMEIRA prioridade no atendimento a vítima de TAE:", opcoes:["Identificar o método","Garantir segurança da cena e socorristas","Perguntar o motivo à vítima","ABCDE antes da segurança"], correta:1 },
      { id:2, enunciado:"Indução de vômito em intoxicação por TAE:", opcoes:["Recomendada sempre","Contraindicada — risco de broncoaspiração e lesão química","Indicada para comprimidos","Obrigatória se consciente"], correta:1 },
      { id:3, enunciado:"Abordagem comunicacional com vítima de TAE consciente:", opcoes:["Interrogatória e diretiva","Empática, sem julgamento, escuta ativa, voz calma","Focada em convencer que errou","Evitar qualquer conversa"], correta:1 },
      { id:4, enunciado:"TAE por enforcamento com vítima suspensa:", opcoes:["Cortar o laço e deixar cair","Sustentar o corpo, cortar o laço pelo lado, deitar com proteção cervical","Aguardar apoio policial","DEA imediato ao retirar"], correta:1 },
      { id:5, enunciado:"Informação ESSENCIAL na cena de TAE por intoxicação:", opcoes:["Cor dos olhos e tipo sanguíneo","Nome e quantidade da substância, horário e sintomas","Histórico familiar psiquiátrico","Apenas nome da vítima"], correta:1 },
      { id:6, enunciado:"Carvão ativado no APH em TAE oral:", opcoes:["Administrado por qualquer socorrista em toda intoxicação","Contraindicado em inconscientes ou com risco de aspiração","Antídoto universal","Dado antes de qualquer outro suporte"], correta:1 },
      { id:7, enunciado:"Notificação de TAE ao SINAN é:", opcoes:["Opcional","Obrigatória — notificação compulsória no Brasil","Restrita a casos com óbito","Só quando família autoriza"], correta:1 },
      { id:8, enunciado:"TAE por ferimento cortante em punho: conduta prioritária:", opcoes:["Conversar antes de qualquer intervenção","Controle imediato da hemorragia respeitando dignidade da vítima","Torniquete em qualquer laceração de punho","Aguardar consentimento"], correta:1 },
      { id:9, enunciado:"Sigilo em TAE no APH:", opcoes:["Compartilhar com qualquer familiar","Sigilo profissional — só com equipe de saúde receptora","Imprensa pode ser informada","Vizinhos têm direito à informação"], correta:1 },
      { id:10, enunciado:"Após estabilização clínica de vítima de TAE:", opcoes:["Alta se sinais vitais estáveis","Avaliação psiquiátrica obrigatória antes da alta","Retorno ao domicílio com ansiolítico","Internação compulsória sempre"], correta:1 },
  ]},
};

const MODULOS = [
  {
    id: 1, titulo: "Introdução ao APH", icone: "🚑", status: "disponivel",
    topicos: [
      { id: "1.1", titulo: "O que é o APH?", conteudo: { tipo: "texto", intro: "O Atendimento Pré-Hospitalar (APH) é todo e qualquer cuidado prestado à vítima fora do ambiente hospitalar, com o objetivo de estabilizar seu estado clínico e garantir transporte seguro até a unidade de saúde.", blocos: [ { tipo: "destaque", texto: "APH começa quando o socorro é acionado e termina quando a vítima é entregue ao serviço de saúde receptor." }, { tipo: "paragrafo", texto: "O APH não se limita apenas ao transporte da vítima. Envolve avaliação rápida da cena, identificação de riscos, prestação de primeiros cuidados e comunicação com a regulação médica — tudo isso integrado e simultâneo." }, { tipo: "lista", titulo: "O APH abrange:", itens: ["Atendimento em acidentes de trânsito, afogamentos, traumas e emergências clínicas","Suporte básico e avançado de vida","Triagem em desastres e eventos com múltiplas vítimas","Regulação médica e transporte inter-hospitalar"] }, { tipo: "paragrafo", texto: "A qualidade do APH influencia diretamente a sobrevida e a recuperação da vítima. Intervenções rápidas e corretas nos primeiros minutos — a chamada 'hora de ouro' — podem ser decisivas entre a vida e a morte." } ] } },
      { id: "1.2", titulo: "História e evolução do APH", conteudo: { tipo: "timeline", intro: "O APH moderno não surgiu do nada. Sua história é marcada por guerras, catástrofes e a busca constante por salvar mais vidas.", eventos: [ { ano: "1792", titulo: "Larrey e as ambulâncias voadoras", descricao: "O cirurgião francês Dominique Jean Larrey criou as primeiras ambulâncias militares durante as guerras napoleônicas, levando o socorro ao campo de batalha." }, { ano: "1865", titulo: "Guerra Civil Americana", descricao: "Jonathan Letterman sistematizou o transporte de feridos, criando um modelo de triagem e evacuação que influencia o APH até hoje." }, { ano: "1966", titulo: "Relatório Acidental Death and Disability (EUA)", descricao: "Documento que expôs as deficiências no APH e impulsionou a criação dos primeiros serviços de emergência médica modernos nos EUA." }, { ano: "1995", titulo: "Primeiro SAMU do Brasil — Porto Alegre/RS", descricao: "O primeiro Serviço de Atendimento Móvel de Urgência do Brasil foi implantado em Porto Alegre (RS) em 1995, inspirado no modelo francês SAMU 15. A regulamentação nacional pelo Ministério da Saúde veio em 2003, com a Portaria 1.864." }, { ano: "2003", titulo: "Política Nacional de Atenção às Urgências", descricao: "O Brasil institui a PNAU, integrando SAMU, UPAs e hospitais em uma rede de atenção às urgências — modelo vigente até hoje." } ] } },
      { id: "1.3", titulo: "Responsabilidade legal e omissão de socorro", conteudo: { tipo: "texto", intro: "O APH é regido por leis que estabelecem deveres e responsabilidades para profissionais e cidadãos. Conhecer esse arcabouço é parte essencial da formação do socorrista.", blocos: [ { tipo: "card-grid", cards: [ { titulo: "Art. 135 do Código Penal", subtitulo: "Omissão de socorro", texto: "Deixar de prestar assistência a vítima em perigo é crime, punível com detenção de 1 a 6 meses ou multa. Agravado se o omitente é profissional de saúde." }, { titulo: "Código de Ética — COFEN 564/2017", subtitulo: "Obrigação ética do enfermeiro/técnico", texto: "Proíbe recusa injustificada de assistência em situação de urgência. O profissional responde ética, civil e penalmente por omissão." }, { titulo: "CFM — Resolução 2.059/2013", subtitulo: "Regulamentação médica no APH", texto: "Define o papel do médico regulador, a obrigatoriedade de regulação médica no SAMU e os protocolos de intervenção à distância." }, { titulo: "Lei 9.654/1998", subtitulo: "Profissão de Enfermagem", texto: "Regulamenta o exercício da enfermagem. O técnico atua em nível médio, sob supervisão do enfermeiro, dentro do escopo legal definido." } ] }, { tipo: "destaque", texto: "O técnico de enfermagem no APH atua SEMPRE sob supervisão e protocolo. Ações fora do escopo legal geram responsabilidade civil, penal e ética." }, { tipo: "lista", titulo: "Responsabilidade no APH:", itens: [ "Civil: obrigação de indenizar danos causados por imperícia, imprudência ou negligência", "Penal: crimes como omissão de socorro, lesão corporal culposa ou dolosa", "Ética: processo no COREN com penalidades que vão de advertência à cassação do registro", "Administrativa: sanções institucionais pelo descumprimento de protocolos" ] } ] } },
      { id: "1.4", titulo: "Cadeia de sobrevivência", conteudo: { tipo: "texto", intro: "A cadeia de sobrevivência representa os elos sequenciais que, quando bem executados, maximizam as chances de sobrevida da vítima.", blocos: [ { tipo: "cadeia", elos: [ { numero: 1, titulo: "Reconhecimento precoce", icone: "👁️", cor: "#e53e3e", descricao: "Identificar rapidamente sinais de emergência e acionar o socorro" }, { numero: 2, titulo: "Chamada de emergência", icone: "📞", cor: "#dd6b20", descricao: "Acionar o SAMU (192) ou Bombeiros (193) imediatamente" }, { numero: 3, titulo: "RCP precoce", icone: "🤲", cor: "#d69e2e", descricao: "Iniciar ressuscitação cardiopulmonar de qualidade sem demora" }, { numero: 4, titulo: "Desfibrilação precoce", icone: "⚡", cor: "#38a169", descricao: "Uso do DEA o mais rápido possível nos casos de FV/TV sem pulso" }, { numero: 5, titulo: "Suporte avançado de vida", icone: "🏥", cor: "#3182ce", descricao: "Intervenção médica com medicamentos, via aérea avançada e monitorização" }, { numero: 6, titulo: "Cuidados pós-PCR", icone: "💊", cor: "#805ad5", descricao: "Cuidados intensivos após retorno da circulação espontânea" } ] }, { tipo: "paragrafo", texto: "Cada elo da cadeia depende do anterior. A ausência ou atraso em qualquer etapa compromete o resultado final." } ] } },
      { id: "1.5", titulo: "Papéis na equipe de APH", conteudo: { tipo: "texto", intro: "O APH é trabalho em equipe. Cada membro tem papel definido, e a eficiência depende da comunicação e clareza de funções.", blocos: [ { tipo: "equipe", membros: [ { cargo: "Médico Regulador", icone: "👨‍⚕️", cor: "#3182ce", responsabilidades: ["Gerencia a central de regulação médica","Autoriza e orienta o despacho de recursos","Orienta condutas via rádio/telefone","Define o destino da vítima"] }, { cargo: "Enfermeiro", icone: "🧑‍⚕️", cor: "#38a169", responsabilidades: ["Lidera o atendimento clínico na cena","Realiza procedimentos de alta complexidade","Coordena a equipe assistencial","Documenta e comunica com a regulação"] }, { cargo: "Técnico de Enfermagem", icone: "👩‍⚕️", cor: "#d69e2e", responsabilidades: ["Auxilia sob supervisão do enfermeiro","Realiza procedimentos dentro de seu escopo","Controla materiais e equipamentos","Suporte durante o transporte"] }, { cargo: "Condutor Socorrista", icone: "🚗", cor: "#805ad5", responsabilidades: ["Condução segura da ambulância","Manutenção básica do veículo","Apoio ao atendimento na cena","Comunicação com a central"] } ] }, { tipo: "destaque", texto: "No APH, hierarquia salva vidas. Discussões na cena comprometem o atendimento. Conflitos são resolvidos depois." } ] } }
    ]
  },

  {
    id: 2, titulo: "Legislação, Ética e Recusa de Atendimento", icone: "⚖️", status: "disponivel",
    topicos: [
      { id: "2.1", titulo: "Marco legal do APH no Brasil", conteudo: { tipo: "texto", intro: "O APH no Brasil é sustentado por um arcabouço legal que define responsabilidades, direitos e deveres de todos os envolvidos — profissionais, pacientes e instituições.", blocos: [
        { tipo: "card-grid", cards: [
          { titulo: "Lei 8.080/1990", subtitulo: "Lei Orgânica da Saúde", texto: "Base do SUS. Define organização do sistema de saúde e as ações de urgência e emergência como dever do Estado." },
          { titulo: "Portaria MS 1.863/2003", subtitulo: "PNAU", texto: "Institui a Política Nacional de Atenção às Urgências com o SAMU 192 como componente central." },
          { titulo: "Portaria MS 2.048/2002", subtitulo: "Regulamento Técnico", texto: "Define padrões para funcionamento, recursos humanos e tipos de ambulâncias dos sistemas de urgência." },
          { titulo: "Res. COFEN 564/2017", subtitulo: "Código de Ética de Enfermagem", texto: "Regula condutas éticas do enfermeiro e técnico nas ações de urgência, garantindo assistência sem discriminação." }
        ]},
        { tipo: "destaque", texto: "O profissional que abandona vítima em situação de risco pode responder por omissão de socorro (Art. 135 do Código Penal), independente de ser socorrista profissional ou cidadão comum." }
      ]}},
      { id: "2.2", titulo: "Princípios bioéticos no APH", conteudo: { tipo: "texto", intro: "Os quatro princípios da bioética guiam as decisões clínicas e éticas em todas as situações de atendimento pré-hospitalar.", blocos: [
        { tipo: "cadeia", elos: [
          { numero: 1, titulo: "Autonomia", icone: "🙋", cor: "#3182ce", descricao: "Respeitar a capacidade do paciente de tomar decisões informadas sobre seu próprio cuidado." },
          { numero: 2, titulo: "Beneficência", icone: "💚", cor: "#38a169", descricao: "Agir sempre em benefício do paciente — fazer o bem." },
          { numero: 3, titulo: "Não-maleficência", icone: "🛡️", cor: "#d69e2e", descricao: "Não causar dano desnecessário. 'Primum non nocere' — primeiro, não prejudicar." },
          { numero: 4, titulo: "Justiça", icone: "⚖️", cor: "#805ad5", descricao: "Distribuição equitativa dos recursos e tratamento igualitário — sem discriminação de qualquer natureza." }
        ]},
        { tipo: "destaque", texto: "Em conflito entre princípios: a vida em risco imediato prevalece sobre a autonomia em vítimas com capacidade decisória comprometida (inconsciência, intoxicação, crise psiquiátrica)." }
      ]}},
      { id: "2.3", titulo: "Direito de recusa de atendimento", conteudo: { tipo: "texto", intro: "O adulto consciente, lúcido e com capacidade de discernimento tem o direito legal e ético de recusar qualquer atendimento médico — inclusive o pré-hospitalar.", blocos: [
        { tipo: "lista", titulo: "Protocolo de recusa de atendimento:", itens: [
          "1. Confirmar que a vítima está consciente, orientada e capaz de tomar decisões",
          "2. Informar claramente os riscos da recusa, em linguagem acessível",
          "3. Documentar a recusa na ficha de atendimento (identificação, riscos explicados, assinatura se possível)",
          "4. Comunicar imediatamente ao médico regulador",
          "5. Manter presença e diálogo enquanto possível — não abandonar",
          "6. Registrar testemunhas presentes (nome e contato)"
        ]},
        { tipo: "card-grid", cards: [
          { titulo: "Quem PODE recusar", subtitulo: "Capacidade decisória presente", texto: "Adulto consciente, orientado, sem alteração do nível de consciência, sem intoxicação ou crise psiquiátrica." },
          { titulo: "Quem NÃO pode recusar", subtitulo: "Capacidade decisória comprometida", texto: "Inconsciente, intoxicado, em crise psiquiátrica grave, criança/adolescente sem responsável, com Glasgow alterado." },
          { titulo: "Menor de idade", subtitulo: "Proteção especial — ECA", texto: "Criança ou adolescente NÃO pode recusar. Atendimento obrigatório. Comunicar ao Conselho Tutelar e à regulação médica." },
          { titulo: "Risco de vida iminente", subtitulo: "Beneficência prevalece", texto: "Em risco de morte imediato, atender mesmo sem consentimento — documentar e comunicar à regulação." }
        ]},
        { tipo: "destaque", texto: "Atender à força um adulto capaz que recusa é crime de constrangimento ilegal e lesão corporal (CP Art. 146). A documentação correta protege o profissional." }
      ]}},
      { id: "2.4", titulo: "Sigilo, privacidade e notificações compulsórias", conteudo: { tipo: "texto", intro: "O sigilo profissional no APH protege a dignidade da vítima e é obrigação legal e ética. Porém, certas situações exigem notificação obrigatória ao sistema de vigilância.", blocos: [
        { tipo: "card-grid", cards: [
          { titulo: "Sigilo profissional", subtitulo: "Obrigação legal e ética", texto: "Informações da ocorrência são compartilhadas APENAS com a equipe de saúde receptora. Imprensa, curiosos e familiares não autorizados: sem informações." },
          { titulo: "Notificação compulsória", subtitulo: "Agravos obrigatórios ao SINAN", texto: "Tentativa de autoextermínio, violência doméstica, maus-tratos, violência sexual, doenças infecciosas de notificação. O serviço receptor preenche — APH informa." },
          { titulo: "Violência doméstica", subtitulo: "Lei Maria da Penha", texto: "Suspeita de violência doméstica deve ser comunicada à regulação médica e registrada na ficha. Não é necessária confirmação para notificar." },
          { titulo: "Maus-tratos a criança/idoso", subtitulo: "Grupos vulneráveis", texto: "Comunicar ao Conselho Tutelar (criança) ou Ministério Público (idoso). ECA e Estatuto do Idoso preveem proteção especial." }
        ]},
        { tipo: "destaque", texto: "A notificação compulsória não viola o sigilo — ela é a exceção legalmente prevista. Omitir notificação obrigatória pode gerar responsabilidade legal para o profissional." }
      ]}},
      { id: "2.5", titulo: "Responsabilidade profissional e documentação", conteudo: { tipo: "texto", intro: "A documentação correta do atendimento protege o profissional, garante continuidade do cuidado e é instrumento legal em caso de questionamento judicial.", blocos: [
        { tipo: "lista", titulo: "O que deve constar na ficha de atendimento do APH:", itens: [
          "Data, hora de acionamento, chegada à cena, saída e chegada ao hospital",
          "Identificação da vítima (nome, idade, documento se disponível)",
          "Queixa principal e mecanismo de lesão ou natureza da doença",
          "Avaliação clínica: sinais vitais, Glasgow, achados físicos relevantes",
          "Intervenções realizadas (com horário): acesso venoso, medicamentos, imobilização, RCP",
          "Resposta à intervenção e evolução durante o transporte",
          "Destino e nome do profissional receptor no hospital",
          "Em caso de recusa: documentação específica conforme protocolo"
        ]},
        { tipo: "destaque", texto: "Ficha mal preenchida é equivalente a atendimento mal feito perante a Justiça. 'O que não está escrito, não foi feito' — essa é a lógica jurídica." }
      ]}}
    ]
  },

  {
    id: 3, titulo: "As 3 Etapas do Atendimento", icone: "📋", status: "disponivel",
    topicos: [
      { id: "3.1", titulo: "Visão geral das 3 etapas", conteudo: { tipo: "texto", intro: "Todo atendimento pré-hospitalar, independente da natureza da ocorrência, é estruturado em três etapas sequenciais e interdependentes: avaliação da cena, avaliação da vítima e intervenção e transporte. Conhecer essa estrutura é o que diferencia um atendimento técnico de uma resposta impulsiva.", blocos: [
        { tipo: "cadeia", elos: [
          { numero: 1, titulo: "Etapa 1 — Avaliação da Cena", icone: "🔍", cor: "#e53e3e", descricao: "Antes de tocar a vítima: segurança, mecanismo de lesão, número de vítimas, recursos disponíveis." },
          { numero: 2, titulo: "Etapa 2 — Avaliação da Vítima", icone: "🩺", cor: "#dd6b20", descricao: "Avaliação primária (ABCDE), avaliação secundária, anamnese (SAMPLE) e sinais vitais." },
          { numero: 3, titulo: "Etapa 3 — Intervenção e Transporte", icone: "🚑", cor: "#38a169", descricao: "Estabilização, procedimentos necessários, decisão de transporte e comunicação com a regulação." }
        ]},
        { tipo: "destaque", texto: "As etapas são sequenciais, mas dinâmicas. Problemas identificados devem ser tratados imediatamente antes de avançar para a próxima etapa — exceto quando o transporte urgente é a própria intervenção." },
        { tipo: "paragrafo", texto: "Este modelo de três etapas está presente em todos os grandes protocolos internacionais de APH: PHTLS (Pre-Hospital Trauma Life Support), ACLS, ITLS e INEM. Independente do sistema adotado, a lógica é sempre: cena → vítima → conduta." }
      ]}},
      { id: "3.2", titulo: "Etapa 1 — Avaliação da Cena", conteudo: { tipo: "texto", intro: "A avaliação da cena começa antes mesmo de sair da ambulância. Observar o ambiente ainda em movimento já fornece informações valiosas sobre o que aguarda a equipe.", blocos: [
        { tipo: "lista", titulo: "O que avaliar na Etapa 1:", itens: [
          "Segurança: a cena é segura para minha entrada? Há riscos para mim, para a equipe, para a vítima?",
          "Mecanismo de lesão ou natureza da doença: trauma ou clínico? Alta ou baixa energia?",
          "Número de vítimas: uma vítima, múltiplas ou IMV?",
          "Recursos disponíveis: o que tenho? O que preciso solicitar?",
          "Impressão geral: qual é o estado aparente da vítima antes do contato?"
        ]},
        { tipo: "card-grid", cards: [
          { titulo: "Duração ideal", subtitulo: "10 a 30 segundos", texto: "A avaliação da cena deve ser rápida e eficiente. Tempo excessivo nesta etapa atrasa o atendimento da vítima." },
          { titulo: "EPI obrigatório", subtitulo: "Antes de qualquer aproximação", texto: "Luvas, máscara e óculos são colocados ANTES de chegar à vítima, não durante a avaliação." },
          { titulo: "Comunicação com a regulação", subtitulo: "Ainda na Etapa 1", texto: "Confirmar chegada, reportar condições da cena e solicitar recursos adicionais se necessário." },
          { titulo: "Avaliação contínua", subtitulo: "A cena pode mudar", texto: "Reavalie a segurança da cena a cada momento. Incêndio, multidão, clima — tudo pode mudar." }
        ]}
      ]}},
      { id: "3.3", titulo: "Etapa 2 — Avaliação da Vítima (XABCDE)", conteudo: { tipo: "texto", intro: "A avaliação da vítima no trauma segue o protocolo XABCDE (PHTLS 10ª edição). No paciente clínico, aplica-se o ABCDE convencional. A avaliação é dividida em primária e secundária.", blocos: [
        { tipo: "card-grid", cards: [
          { titulo: "Avaliação Primária — TRAUMA", subtitulo: "XABCDE (PHTLS 10ª ed. / ITLS)", texto: "X: hemorragia exsanguinante | A: via aérea + cervical | B: ventilação | C: circulação | D: disfunção neurológica | E: exposição. O X foi inserido para controlar hemorragias fatais ANTES da via aérea." },
          { titulo: "Avaliação Primária — CLÍNICO", subtitulo: "ABCDE (ACLS / ATLS)", texto: "A: via aérea | B: ventilação | C: circulação | D: disfunção | E: exposição. Sem o X pois hemorragia exsanguinante não é a causa primária em emergências clínicas." },
          { titulo: "Avaliação Secundária", subtitulo: "Exame céfalo-caudal", texto: "Realizada SOMENTE após estabilização da primária. Busca lesões não identificadas. Inclui SAMPLE completo." },
          { titulo: "Sinais Vitais", subtitulo: "Parâmetros objetivos", texto: "FC, FR, PA, SpO2, glicemia, temperatura. Aferir ao menos uma vez e monitorar tendência no transporte." }
        ]},
        { tipo: "destaque", texto: "PHTLS 10ª ed. (2023): o X antes do A é obrigatório no trauma. Hemorragia exsanguinante mata em 3 minutos — mais rápido que obstrução de via aérea." },
        { tipo: "paragrafo", texto: "Regra prática: vítima instável de trauma = XABCDE + transporte imediato. Não perca tempo na cena. A cirurgia é o tratamento definitivo do politraumatizado grave." }
      ]}},
      { id: "3.4", titulo: "Etapa 3 — Intervenção e Transporte", conteudo: { tipo: "texto", intro: "A terceira etapa engloba todas as intervenções realizadas no APH e a decisão de transporte. É aqui que se aplica o conceito de 'tratar e ir' versus 'ficar e tratar'.", blocos: [
        { tipo: "card-grid", cards: [
          { titulo: "Tratar e ir (Scoop & Run)", subtitulo: "Vítimas instáveis", texto: "Estabilize o essencial na cena (via aérea, hemorragia grave) e transporte imediatamente. Continuação dos cuidados dentro da ambulância." },
          { titulo: "Ficar e tratar (Stay & Play)", subtitulo: "Vítimas estáveis", texto: "Quando a condição clínica permite, realizar procedimentos completos na cena antes do transporte. Mais comum em emergências clínicas." },
          { titulo: "Destino correto", subtitulo: "Decisão da regulação médica", texto: "Hospital mais próximo? Hospital de referência? Centro de trauma? A regulação médica define com base no quadro clínico e nos recursos disponíveis." },
          { titulo: "Comunicação pré-chegada", subtitulo: "Aviso ao serviço receptor", texto: "Informar ao hospital o que está chegando: número de vítimas, quadro clínico, intervenções realizadas, tempo estimado de chegada." }
        ]},
        { tipo: "lista", titulo: "Procedimentos realizados na Etapa 3:", itens: [
          "Controle de hemorragias (pressão direta, torniquete)",
          "Abertura e manutenção de via aérea",
          "Ventilação assistida com BVM e O2 suplementar",
          "Imobilização de fraturas e coluna",
          "Acesso venoso e reposição volêmica conforme protocolo",
          "Monitorização contínua e reavaliação dos sinais vitais",
          "Registro completo do atendimento"
        ]}
      ]}},
      { id: "3.5", titulo: "Integração das etapas na prática", conteudo: { tipo: "texto", intro: "Na prática, as três etapas se sobrepõem e se retroalimentam. Um socorrista experiente executa todas elas de forma quase simultânea, com automação e raciocínio clínico paralelo.", blocos: [
        { tipo: "card-grid", cards: [
          { titulo: "Cenário 1 — Acidente de trânsito", subtitulo: "Aplicação das 3 etapas", texto: "Etapa 1: cena segura, 2 vítimas, impacto frontal alta energia. Etapa 2: ABCDE revela Glasgow 10 e PA 80x50. Etapa 3: via aérea + acesso venoso + transporte imediato ao trauma center." },
          { titulo: "Cenário 2 — IAM em domicílio", subtitulo: "Aplicação das 3 etapas", texto: "Etapa 1: cena domiciliar segura, 1 vítima, natureza clínica. Etapa 2: dor precordial, PA 140x90, FC 110. Etapa 3: O2, acesso venoso, ECG, AAS, aviso ao hospital cardiológico." },
          { titulo: "Cenário 3 — Engasgo em restaurante", subtitulo: "Aplicação das 3 etapas", texto: "Etapa 1: cena pública segura, 1 vítima, natureza clínica. Etapa 2: obstrução total — vítima não consegue falar. Etapa 3: Heimlich imediato. Se PCR: RCP + verificar boca." },
          { titulo: "Erro mais comum", subtitulo: "Pular etapas", texto: "Ir direto à vítima sem avaliar a cena (risco para o socorrista) ou fazer avaliação secundária completa em vítima instável (perda de tempo crítico)." }
        ]},
        { tipo: "destaque", texto: "As 3 etapas não são burocracia — são raciocínio clínico organizado. Treinar esta estrutura até que se torne automática é o que define um socorrista competente." }
      ]}}
    ]
  },

  {
    id: 4, titulo: "Deslocamento Seguro", icone: "🚒", status: "disponivel",
    topicos: [
      { id: "4.1", titulo: "Legislação e responsabilidade no deslocamento", conteudo: { tipo: "texto", intro: "O deslocamento de emergência é regido por leis específicas que conferem prerrogativas à ambulância, mas também estabelecem limites claros de responsabilidade para o condutor e para a equipe.", blocos: [
        { tipo: "card-grid", cards: [
          { titulo: "CTB — Art. 29, §2º", subtitulo: "Código de Trânsito Brasileiro", texto: "Veículos de emergência em serviço, com sinais visuais e sonoros acionados, têm prioridade de passagem sobre os demais veículos." },
          { titulo: "CTB — Art. 38", subtitulo: "Obrigações no cruzamento", texto: "Mesmo com prioridade, o condutor de veículo de emergência deve certificar-se de que os outros veículos cederam passagem antes de cruzar." },
          { titulo: "Responsabilidade civil e penal", subtitulo: "Acidente durante deslocamento", texto: "Em caso de acidente durante o deslocamento, o condutor responde civil e penalmente. A urgência não exime de responsabilidade." },
          { titulo: "Portaria MS 2.048/2002", subtitulo: "Padrão de ambulâncias", texto: "Define os equipamentos obrigatórios de sinalização: sirene eletrônica, giroflex e faixas retrorefletivas. Ambulância sem esses equipamentos não tem prerrogativa legal." }
        ]},
        { tipo: "destaque", texto: "A sirene e o giroflex NÃO dão direito de passar no sinal vermelho sem antes confirmar que todos os veículos pararam. A prioridade é legal — a segurança é obrigatória." }
      ]}},
      { id: "4.2", titulo: "Técnicas de condução em emergência", conteudo: { tipo: "texto", intro: "Conduzir uma ambulância em emergência exige técnica, atenção e controle emocional. Velocidade alta com controle é diferente de velocidade irresponsável.", blocos: [
        { tipo: "lista", titulo: "Princípios da condução segura em emergência:", itens: [
          "Usar sirene E giroflex simultaneamente — nunca apenas um dos dois",
          "Reduzir velocidade em cruzamentos, mesmo com sinalização acionada",
          "Manter distância segura do veículo à frente — frenagem da ambulância carregada é diferente do carro vazio",
          "Nunca ultrapassar pelo acostamento em alta velocidade",
          "Em rodovias: usar a faixa da esquerda com sinalização contínua",
          "Comunicar ao parceiro as manobras antes de executá-las",
          "Evitar frenagem brusca — pode piorar o quadro da vítima transportada"
        ]},
        { tipo: "card-grid", cards: [
          { titulo: "Cruzamentos", subtitulo: "Ponto crítico do deslocamento", texto: "Diminuir a velocidade, verificar visualmente os dois sentidos, confirmar parada dos veículos e cruzar de forma controlada." },
          { titulo: "Curvas e lombadas", subtitulo: "Risco de tombamento", texto: "Ambulâncias têm centro de gravidade alto. Curvas em alta velocidade e lombadas sem reduzir são causas frequentes de acidentes." },
          { titulo: "Chuva e piso molhado", subtitulo: "Reduzir a velocidade", texto: "Distância de frenagem aumenta significativamente. Reduzir velocidade e aumentar distância de segurança." },
          { titulo: "Comunicação contínua", subtitulo: "Equipe integrada", texto: "Socorrista no banco do passageiro atua como copiloto: observa o trânsito, avisa sobre obstáculos e comunica com a central." }
        ]}
      ]}},
      { id: "4.3", titulo: "Sinalização e abordagem do local", conteudo: { tipo: "texto", intro: "A forma como a ambulância é posicionada na cena influencia diretamente a segurança da equipe, da vítima e dos outros usuários da via.", blocos: [
        { tipo: "card-grid", cards: [
          { titulo: "Posicionamento da ambulância", subtitulo: "Proteção da cena", texto: "Estacionar a ambulância em ângulo (30–45°) em relação à pista, formando uma barreira de proteção entre a equipe e o tráfego." },
          { titulo: "Distância de segurança", subtitulo: "Em relação ao acidente", texto: "Parar a pelo menos 30 metros do local em acidentes com risco de explosão, derramamento químico ou estrutura instável." },
          { titulo: "Sinalização da cena", subtitulo: "Triângulo de segurança", texto: "Colocar cones ou triângulos a 30, 60 e 100 metros do ponto de atendimento, na direção do tráfego que se aproxima." },
          { titulo: "Iluminação", subtitulo: "Atendimentos noturnos", texto: "Manter giroflex e faróis acionados. Usar lanternas pessoais. Nunca trabalhar em rodovia sem colete refletivo." }
        ]},
        { tipo: "destaque", texto: "Em rodovias de alta velocidade: a ambulância posicionada atrás da cena não protege a equipe. Posicione-a ANTES da cena em relação ao tráfego que se aproxima — criando uma barreira." }
      ]}},
      { id: "4.4", titulo: "Transporte da vítima", conteudo: { tipo: "texto", intro: "O transporte é a última fase do deslocamento e exige cuidados específicos para não agravar o quadro da vítima durante o trajeto até o hospital.", blocos: [
        { tipo: "lista", titulo: "Cuidados no transporte:", itens: [
          "Fixar a maca adequadamente antes de iniciar o deslocamento",
          "Manter monitorização contínua dos sinais vitais durante o transporte",
          "Comunicar a regulação médica sobre condições da vítima e tempo estimado de chegada",
          "Avisar o condutor antes de realizar procedimentos que exijam estabilidade do veículo",
          "Evitar frenagens e curvas bruscas — solicitar condução mais suave ao condutor",
          "Registrar horários: saída da cena, chegada ao hospital, transferência da vítima"
        ]},
        { tipo: "card-grid", cards: [
          { titulo: "Posição da vítima no transporte", subtitulo: "Depende do quadro clínico", texto: "Decúbito dorsal: padrão. Semi-sentado: dispneia, EAP. Trendelenburg: choque (exceto TCE). Lateral de segurança: inconsciência sem trauma. Ortostática: impossível — nunca transportar sentado sem fixação." },
          { titulo: "Vítima em PCR no transporte", subtitulo: "RCP em movimento", texto: "Manter compressões durante o transporte. Dispositivosde compressão mecânica (Lucas, AutoPulse) garantem qualidade em movimento." },
          { titulo: "Velocidade no transporte", subtitulo: "Equilíbrio entre urgência e segurança", texto: "Chegar 2 minutos mais rápido não justifica um acidente com a vítima dentro. Condução firme, mas controlada." },
          { titulo: "Passagem de caso no hospital", subtitulo: "SBAR oral", texto: "Ao entregar a vítima: identificação, quadro clínico, mecanismo, intervenções realizadas, sinais vitais e evolução durante o transporte." }
        ]}
      ]}},
      { id: "4.5", titulo: "Estresse no deslocamento e gestão emocional", conteudo: { tipo: "texto", intro: "O deslocamento em emergência é um dos momentos de maior estresse na rotina do socorrista. Controlar o estado emocional é tão importante quanto a técnica de condução.", blocos: [
        { tipo: "card-grid", cards: [
          { titulo: "Pressão de tempo", subtitulo: "A urgência real vs. percebida", texto: "Nem todo acionamento é uma corrida contra a morte. Avaliar a gravidade antes de sair em velocidade máxima. Deslocamento desnecessariamente agressivo cria risco sem benefício." },
          { titulo: "Comunicação na equipe", subtitulo: "Condutor e socorristas", texto: "Equipe bem comunicada evita decisões impulsivas. O socorrista pode e deve orientar o condutor: 'Reduza na curva', 'Confirme o cruzamento'." },
          { titulo: "Fadiga e plantões longos", subtitulo: "Risco real", texto: "Após 12h ou mais de plantão, tempo de reação aumenta, julgamento piora. Reconhecer o próprio limite é responsabilidade profissional." },
          { titulo: "Crítica pós-ocorrência", subtitulo: "Aprendizado", texto: "Após cada atendimento com deslocamento crítico: avaliar o que funcionou e o que pode melhorar. Sem julgamento — com foco em segurança futura." }
        ]},
        { tipo: "destaque", texto: "O socorrista que chega são ao local tem 100% de capacidade para atender. O socorrista que se acidenta no deslocamento tem 0% — e ainda cria uma segunda vítima." }
      ]}}
    ]
  },

  {
    id: 5, titulo: "Equipamentos do APH", icone: "🧰", status: "disponivel",
    topicos: [
      { id: "5.1", titulo: "Equipamentos de via aérea", conteudo: { tipo: "texto", intro: "Os equipamentos de via aérea são os mais críticos do APH. Conhecer sua indicação, técnica de uso e cuidados é prioridade para qualquer socorrista.", blocos: [
        { tipo: "card-grid", cards: [
          { titulo: "Cânula Orofaríngea (Guedel)", subtitulo: "Para que serve", texto: "Impede que a língua obstrua a faringe em vítima inconsciente sem reflexo de gag. Medir do lóbulo da orelha à comissura labial." },
          { titulo: "Cânula Nasofaríngea", subtitulo: "Para que serve", texto: "Alternativa à Guedel em vítimas semi-conscientes ou com trismo. Contraindicada em fratura de base do crânio." },
          { titulo: "Bolsa-Valva-Máscara (BVM)", subtitulo: "Para que serve", texto: "Ventilação com pressão positiva. Adulto: 500–600 mL por ventilação, 10–12/min. Requer boa vedação da máscara ao rosto." },
          { titulo: "Aspirador de secreções", subtitulo: "Para que serve", texto: "Remove sangue, vômito e secreções da via aérea. Usar por no máximo 10 segundos por aspiração para não causar hipóxia." }
        ]},
        { tipo: "lista", titulo: "Cuidados gerais com equipamentos de via aérea:", itens: [
          "Verificar funcionamento antes de cada plantão",
          "Cânulas em tamanhos variados: neonatal, pediátrico e adulto (P, M, G)",
          "BVM com reservatório e O2 ligado aumenta FiO2 para até 90–100%",
          "Nunca usar Guedel em vítima com reflexo de gag — risco de vômito e broncoaspiração",
          "Laringoscópio: verificar pilhas e lâmpada antes do uso"
        ]}
      ]}},
      { id: "5.2", titulo: "Equipamentos de oxigenação e monitorização", conteudo: { tipo: "texto", intro: "O oxigênio suplementar e a monitorização dos parâmetros vitais são pilares do atendimento pré-hospitalar. Cada dispositivo tem indicação específica.", blocos: [
        { tipo: "card-grid", cards: [
          { titulo: "Cateter Nasal (óculos nasal)", subtitulo: "O2: 2–4 L/min → FiO2 24–36%", texto: "Indicado em hipóxia leve (SpO2 92–95%) e em DPOC (manter SpO2 88–92%). Confortável para vítimas conscientes." },
          { titulo: "Máscara Facial Simples", subtitulo: "O2: 5–10 L/min → FiO2 35–60%", texto: "Indicada em hipóxia moderada. Mínimo 5 L/min para evitar reinalação de CO2." },
          { titulo: "Máscara com Reservatório", subtitulo: "O2: 10–15 L/min → FiO2 90–100%", texto: "Máxima concentração de O2 sem via aérea avançada. Indicada em trauma grave, PCR, intoxicação por CO, choque." },
          { titulo: "Oxímetro de Pulso", subtitulo: "Monitorização de SpO2", texto: "Mede saturação periférica de O2. Normal >95%. Abaixo de 92%: intervenção. Pode ser impreciso em hipoperfusão, anemia grave ou CO." }
        ]},
        { tipo: "card-grid", cards: [
          { titulo: "Monitor Cardíaco / DEA", subtitulo: "Monitorização e desfibrilação", texto: "DEA: ritmos chocáveis (FV, TV sem pulso). Monitor: visualização do ritmo em tempo real. Sempre que disponível, monitorar no trauma e PCR." },
          { titulo: "Glicosímetro", subtitulo: "Glicemia capilar", texto: "Verificar em TODA vítima com alteração de consciência antes de qualquer outra conduta. Normal: 70–110 mg/dL em jejum." },
          { titulo: "Esfigmomanômetro", subtitulo: "Pressão arterial", texto: "Manual ou automático. Verificar em ambos os braços em suspeita de dissecção aórtica. Manguito correto para o tamanho do braço." },
          { titulo: "Termômetro", subtitulo: "Temperatura corporal", texto: "Hipotermia (<35°C) e hipertermia (>38,5°C) são emergências. Essencial em afogamento, exposição ao frio e hipertermia maligna." }
        ]}
      ]}},
      { id: "5.3", titulo: "Equipamentos de imobilização e transporte", conteudo: { tipo: "texto", intro: "A imobilização adequada previne lesões secundárias — especialmente na coluna vertebral e nos membros fraturados. Cada dispositivo tem técnica e indicação específica.", blocos: [
        { tipo: "card-grid", cards: [
          { titulo: "Colar Cervical", subtitulo: "Limitação de movimento cervical", texto: "Limita (não imobiliza completamente) movimentos cervicais. Sempre associado à imobilização manual. Tamanhos variados — medir antes de aplicar." },
          { titulo: "Prancha Longa (Longboard)", subtitulo: "Imobilização de coluna", texto: "Extricação e transporte de vítimas com suspeita de lesão de coluna. Requer mínimo 3 socorristas. Associar head blocks e cintos." },
          { titulo: "Colete de Extricação (KED)", subtitulo: "Retirada de veículo", texto: "Imobiliza cabeça, pescoço e tronco para retirada de vítima presa em veículo. Aplicado com vítima sentada antes da remoção." },
          { titulo: "Tala de Tração", subtitulo: "Fraturas de fêmur", texto: "Reduz a dor e o sangramento em fraturas de fêmur pela tração longitudinal. Verificar pulso distal antes e depois da aplicação." }
        ]},
        { tipo: "card-grid", cards: [
          { titulo: "Talas de Imobilização", subtitulo: "Fraturas de membros", texto: "Plásticas, moldáveis ou rígidas. Imobilizar a articulação acima e abaixo do foco de fratura. Verificar perfusão distal pré e pós." },
          { titulo: "Cinto Pélvico", subtitulo: "Fratura de pelve", texto: "Compressão circunferencial da pelve para reduzir sangramento. Posicionar ao nível dos trocânteres maiores. Não aplicar repetidamente." },
          { titulo: "Maca Articulada (Maca Colher)", subtitulo: "Transporte de vítimas no chão", texto: "Permite levantar vítima do chão sem movimentação da coluna. Separar em dois lados, posicionar e unir sob a vítima." },
          { titulo: "Cadeira de Rodas / Cadeira de Transporte", subtitulo: "Vítimas que não toleram decúbito", texto: "Para vítimas conscientes com dificuldade respiratória grave (EAP, crise de asma) que não toleram deitar." }
        ]}
      ]}},
      { id: "5.4", titulo: "Equipamentos de acesso vascular e medicamentos", conteudo: { tipo: "texto", intro: "O acesso vascular permite administração de medicamentos e expansão volêmica no APH. O técnico de enfermagem atua diretamente nessa área sob supervisão.", blocos: [
        { tipo: "card-grid", cards: [
          { titulo: "Cateter Intravenoso Periférico", subtitulo: "Acesso venoso periférico", texto: "Calibres 14–18G para adultos em emergências. Preferir veias do antebraço. Em trauma: dois acessos de grosso calibre." },
          { titulo: "Agulha Intraóssea", subtitulo: "Acesso IO em emergências", texto: "Quando acesso venoso periférico falha em 2 tentativas ou em PCR. Locais: tíbia proximal, úmero proximal. Todos os medicamentos IV podem ser dados IO." },
          { titulo: "Soro Fisiológico 0,9%", subtitulo: "Expansão volêmica", texto: "Principal fluido de reposição no APH. Em trauma: cuidado com excesso antes do controle da hemorragia — hipotensão permissiva." },
          { titulo: "Ringer Lactato", subtitulo: "Expansão volêmica em queimados", texto: "Preferido em queimaduras (Fórmula de Parkland). Mais fisiológico que SF para grandes volumes." }
        ]},
        { tipo: "lista", titulo: "Medicamentos de emergência comuns no APH (conforme protocolo médico):", itens: [
          "Adrenalina (Epinefrina) 1mg/mL: PCR (1mg IV/IO a cada 3-5 min) e anafilaxia (0,3-0,5mg IM)",
          "Glicose 50%: hipoglicemia grave com inconsciência — 20-40mL IV lento",
          "Amiodarona 150mg/3mL: FV/TV refratária após 3º choque — 300mg IV em bólus",
          "Sulfato de Magnésio: Torsades de Pointes e eclâmpsia",
          "Naloxona (Narcan): intoxicação por opioides — 0,4-2mg IV/IM/IN",
          "Midazolam: sedação e controle de convulsões (conforme protocolo médico)"
        ]},
        { tipo: "destaque", texto: "O técnico de enfermagem administra medicamentos APENAS sob prescrição médica verbal (via rádio/telefone com regulação) ou conforme protocolo institucional aprovado. Nunca por iniciativa própria." }
      ]}},
      { id: "5.5", titulo: "Manutenção, checagem e cuidados com equipamentos", conteudo: { tipo: "texto", intro: "Equipamento com falha na cena pode custar uma vida. A checagem sistemática antes de cada plantão é responsabilidade de todos os membros da equipe.", blocos: [
        { tipo: "lista", titulo: "Checklist pré-plantão obrigatório:", itens: [
          "Via aérea: cânulas de todos os tamanhos, BVM testada (sem vazamentos), aspirador funcionando",
          "Oxigênio: cilindro com nível adequado (mínimo 50%), regulador e mangueira sem vazamentos",
          "DEA/Monitor: bateria carregada, pás adesivas dentro do prazo de validade",
          "Imobilização: colar cervical em todos os tamanhos, prancha longa com cintos, KED",
          "Acesso vascular: cateteres de vários calibres, equipo, soro, garrote",
          "Medicamentos: dentro do prazo de validade, quantidade correta conforme protocolo",
          "EPI: luvas, máscaras, óculos — quantidade suficiente para vários atendimentos"
        ]},
        { tipo: "card-grid", cards: [
          { titulo: "Higienização de equipamentos", subtitulo: "Após cada atendimento", texto: "Todo equipamento reutilizável deve ser limpo e desinfetado conforme protocolo da instituição. Risco de contaminação cruzada entre pacientes." },
          { titulo: "Validade de materiais", subtitulo: "Verificação periódica", texto: "Pás do DEA, medicamentos, cateteres e gazes têm prazo de validade. Material vencido deve ser descartado e reposto imediatamente." },
          { titulo: "Registro de falhas", subtitulo: "Comunicação obrigatória", texto: "Equipamento com falha deve ser comunicado imediatamente ao supervisor e substituído antes do próximo atendimento. Nunca 'deixar para depois'." },
          { titulo: "Treinamento contínuo", subtitulo: "Familiaridade com os equipamentos", texto: "Equipamento que o socorrista não sabe usar com agilidade é equipamento inútil na emergência. Treinar regularmente em simulações." }
        ]}
      ]}}
    ]
  },

  {
    id: 6, titulo: "Tipos de Transporte no APH", icone: "🚒", status: "disponivel",
    topicos: [
      { id: "6.1", titulo: "Classificação das ambulâncias — Portaria MS 2.048/2002", conteudo: { tipo: "texto", intro: "No Brasil, as ambulâncias são classificadas em tipos definidos pela Portaria MS 2.048/2002, cada uma com finalidade, equipamento e equipe específicos.", blocos: [
        { tipo: "card-grid", cards: [
          { titulo: "Tipo A — Remoção", subtitulo: "Transporte de pacientes estáveis", texto: "Veículo para transporte simples de pacientes sem risco de vida. Sem equipamentos de emergência avançados. Equipe: 2 técnicos de enfermagem ou condutor + técnico." },
          { titulo: "Tipo B — SBV", subtitulo: "Suporte Básico de Vida", texto: "APH básico e transporte inter-hospitalar de baixo risco. Equipada com O2, DEA, BVM, imobilizadores. Equipe: condutor socorrista + técnico de enfermagem." },
          { titulo: "Tipo C — Resgate", subtitulo: "Salvamento e resgate", texto: "Veículo para atendimento de urgências de qualquer natureza, salvamento e resgate de vítimas. Pode ser terrestre, aéreo ou aquático. Equipe: bombeiros civis/militares com formação em APH." },
          { titulo: "Tipo D — UTI Móvel (SAV)", subtitulo: "Suporte Avançado de Vida", texto: "Ambulância de UTI. Equipada com monitor/desfibrilador, ventilador mecânico, bomba de infusão, drogas vasoativas, laringoscópio e IOT. Equipe: médico + enfermeiro + condutor. Usada no SAMU e transporte inter-hospitalar crítico." }
        ]},
        { tipo: "card-grid", cards: [
          { titulo: "Tipo E — Aeronave", subtitulo: "Transporte aeromédico", texto: "Helicópteros e aviões medicalizados. Indicados para grandes distâncias, áreas de difícil acesso e vítimas críticas. Equipe especializada." },
          { titulo: "Tipo F — Embarcação", subtitulo: "Transporte fluvial/marítimo", texto: "Lanças e embarcações medicalizadas. Essenciais na Amazônia, regiões costeiras e em enchentes. Equipe de APH adaptada ao ambiente aquático." },
          { titulo: "UTI Móvel", subtitulo: "Transporte inter-hospitalar crítico", texto: "Ambulância com recursos de UTI: ventilador mecânico, bombas de infusão, monitor multiparamétrico. Para pacientes críticos entre hospitais." },
          { titulo: "Moto de Emergência (MotoLATE)", subtitulo: "Chegada rápida", texto: "Motocicleta do socorrista para chegar antes da ambulância, iniciar RCP e usar DEA em PCR enquanto ambulância está a caminho." }
        ]}
      ]}},
      { id: "6.2", titulo: "Transporte terrestre — técnicas e cuidados", conteudo: { tipo: "texto", intro: "O transporte terrestre é o mais comum no APH brasileiro. A qualidade do transporte depende do posicionamento da vítima, da monitorização e da comunicação.", blocos: [
        { tipo: "card-grid", cards: [
          { titulo: "Posição padrão", subtitulo: "Decúbito dorsal", texto: "Maioria das vítimas de trauma e clínicas. Maca horizontal com fixação adequada." },
          { titulo: "Semi-sentado (Fowler)", subtitulo: "Dispneia, EAP, ICC", texto: "Cabeceira a 45°. Reduz esforço respiratório. Vítimas de AVC (sem hipotensão), EAP, crise de asma grave." },
          { titulo: "Trendelenburg modificado", subtitulo: "Choque hipovolêmico", texto: "Membros inferiores elevados 30°. Aumenta retorno venoso. Contraindicado em TCE e dificuldade respiratória." },
          { titulo: "Anti-Trendelenburg", subtitulo: "TCE grave", texto: "Cabeceira elevada a 30°. Reduz pressão intracraniana. Indicado em TCE grave com Glasgow ≤8." }
        ]},
        { tipo: "lista", titulo: "Cuidados obrigatórios durante o transporte:", itens: [
          "Fixar a maca antes de iniciar o deslocamento",
          "Monitorizar FC, SpO2, FR e PA continuamente ou a cada 5 min em vítimas instáveis",
          "Comunicar ao hospital receptor: quadro clínico, intervenções e tempo estimado",
          "Avisar o condutor antes de realizar procedimentos (acesso venoso, ventilação) que exigem estabilidade",
          "Registrar horários: saída da cena, chegada ao hospital, passagem de caso",
          "Em PCR durante transporte: manter RCP — dispositivos mecânicos garantem qualidade em movimento"
        ]}
      ]}},
      { id: "6.3", titulo: "Transporte aeromédico", conteudo: { tipo: "texto", intro: "O transporte aeromédico por helicóptero ou aeronave de asa fixa é indicado quando as distâncias ou condições clínicas tornam o transporte terrestre inadequado.", blocos: [
        { tipo: "card-grid", cards: [
          { titulo: "Indicações do helicóptero", subtitulo: "Quando acionar", texto: "Distâncias >30 min de ambulância, terrenos inacessíveis, vítima crítica instável, desastres de massa com múltiplas vítimas graves." },
          { titulo: "Segurança na zona de pouso", subtitulo: "LZ — Landing Zone", texto: "Área de 30x30m limpa, sem obstáculos aéreos, sinalizada com 4 marcadores nas bordas. Vento marcado com fumaça. Afastar pessoas e veículos." },
          { titulo: "Alterações fisiológicas em altitude", subtitulo: "Efeitos sobre a vítima", texto: "Expansão de gases (pneumotórax piora, bloqueio de ar em cuff de tubos), redução da PaO2, hipotermia acelerada. Monitorização redobrada." },
          { titulo: "Contraindicações relativas", subtitulo: "Limitações", texto: "Condições meteorológicas adversas (neblina, tempestade), ausência de LZ adequada, combustível insuficiente para o percurso." }
        ]},
        { tipo: "destaque", texto: "Nunca se aproxime do helicóptero pela cauda (rotor traseiro invisível e mortal). Aproxime-se sempre pela frente, em área visível pelo piloto, agachado, com autorização." }
      ]}},
      { id: "6.4", titulo: "Transporte fluvial e situações especiais", conteudo: { tipo: "texto", intro: "O Brasil possui dimensões continentais e regiões de difícil acesso onde o transporte fluvial é a única opção viável. Adaptações são necessárias.", blocos: [
        { tipo: "card-grid", cards: [
          { titulo: "Região Amazônica", subtitulo: "Realidade brasileira", texto: "Municípios acessíveis apenas por barco. O SAMU fluvial opera com lanchas medicalizadas e equipes treinadas para o ambiente aquático." },
          { titulo: "Estabilização antes do transporte fluvial", subtitulo: "Mais crítico que terrestre", texto: "Mover para dentro da embarcação exige mais tempo e equipe. Estabilizar ao máximo antes de embarcar — agitação do barco complica procedimentos." },
          { titulo: "Proteção da vítima", subtitulo: "Variações de temperatura e umidade", texto: "Sol, chuva e vento amplificam hipotermia. Cobrir a vítima, proteger a via aérea e os acessos vasculares da umidade." },
          { titulo: "Comunicação em áreas remotas", subtitulo: "Rádio e satélite", texto: "Rádio VHF e telefone satélite são essenciais para manter contato com a regulação médica em áreas sem cobertura celular." }
        ]},
        { tipo: "lista", titulo: "Transporte de grupos especiais:", itens: [
          "Gestante: decúbito lateral esquerdo para evitar compressão da veia cava",
          "Recém-nascido: incubadora aquecida, controle glicêmico e monitorização contínua",
          "Grande queimado: cobrir com campo estéril e manter temperatura do ambiente (hipotermia é fatal)",
          "Vítima de TCE grave: anti-Trendelenburg 30°, evitar agitação e manobras que aumentem pressão intracraniana",
          "Amputação: membro amputado em gaze úmida estéril, saco plástico sobre gelo — nunca em contato direto com gelo"
        ]}
      ]}},
      { id: "6.5", titulo: "Decisão de destino e regulação médica", conteudo: { tipo: "texto", intro: "O destino correto é tão importante quanto o atendimento na cena. A regulação médica coordena o sistema e define para onde a vítima deve ser transportada.", blocos: [
        { tipo: "card-grid", cards: [
          { titulo: "Hospital mais próximo vs. mais adequado", subtitulo: "Decisão crítica", texto: "Nem sempre o mais próximo é o melhor. Trauma grave requer centro de trauma. IAM com supra ST: hospital com hemodinâmica. AVC: hospital com TC e trombólise." },
          { titulo: "Papel da regulação médica", subtitulo: "Médico regulador decide", texto: "O médico regulador define o destino com base no quadro clínico, recursos do hospital e tempo de deslocamento. A equipe implementa." },
          { titulo: "Comunicação pré-chegada", subtitulo: "'Código de ativação'", texto: "Informar ao hospital receptor: natureza, número de vítimas, quadro clínico, intervenções e ETA. Hospital se prepara antes da chegada." },
          { titulo: "Passagem de caso — SBAR", subtitulo: "Handoff ao hospital", texto: "Situação (o que aconteceu), Background (histórico), Avaliação (achados e intervenções), Recomendação (o que o hospital precisa saber)." }
        ]},
        { tipo: "destaque", texto: "Transportar para o hospital errado pode custar uma vida. Um paciente com AVC que vai para um hospital sem TC perde tempo de trombólise. A regulação médica existe para evitar isso." }
      ]}}
    ]
  },

  {
    id: 7, titulo: "Avaliação da Cena", icone: "🔍", status: "disponivel",
    topicos: [
      { id: "7.1", titulo: "Segurança da cena", conteudo: { tipo: "texto", intro: "Nenhum atendimento começa sem avaliação de segurança. Socorrista morto ou ferido não salva ninguém. A primeira pergunta ao chegar em qualquer cena é: esta cena é segura para mim atuar?", blocos: [ { tipo: "destaque", texto: "REGRA DE OURO: Nunca entre em uma cena insegura. Estabilize primeiro o ambiente, depois a vítima." }, { tipo: "lista", titulo: "Riscos mais comuns:", itens: ["Acidente de trânsito: combustível, tráfego, instabilidade de veículos","Afogamento: correnteza, profundidade, contaminação","Emergência domiciliar: ambiente hostil, animais, substâncias tóxicas","Violência: agressor no local, armas, multidão","Desastres: estruturas colapsadas, gás, incêndio"] }, { tipo: "card-grid", cards: [ { titulo: "USE sempre EPI", subtitulo: "Equipamento de Proteção Individual", texto: "Luvas, máscara, óculos e avental são obrigatórios em todo atendimento, sem exceção." }, { titulo: "Sinalização da cena", subtitulo: "Proteção do perímetro", texto: "Cones, fitas, viaturas e iluminação protegem equipe e vítima de novos acidentes." }, { titulo: "Peça reforço antes", subtitulo: "Não hesite em acionar apoio", texto: "É mais fácil dispensar um recurso em rota do que aguardar quando a situação piora." }, { titulo: "Rota de fuga", subtitulo: "Sempre tenha uma saída", texto: "Identifique pelo menos duas rotas de saída antes de se aproximar da vítima." } ] } ] } },
      { id: "7.2", titulo: "Cinemática do trauma", conteudo: { tipo: "texto", intro: "Cinemática do trauma é o estudo das forças que atuam sobre o corpo durante um evento traumático. Entender o mecanismo de lesão permite antecipar lesões antes mesmo de examinar a vítima.", blocos: [ { tipo: "lista", titulo: "Mecanismos e lesões esperadas:", itens: ["Impacto frontal: cervical, esterno, tórax, joelhos","Impacto lateral: bacia, fêmur, costelas do lado impactado","Capotamento: lesões múltiplas e imprevisíveis","Pedestre atropelado: pára-choque, capô, queda no solo (3 fases)","Queda de altura: calcâneos, coluna lombar, punho e crânio","Explosão: barotrauma, lesão penetrante por estilhaços"] }, { tipo: "destaque", texto: "Mecanismo de alta energia = presuma lesões graves até que se prove o contrário. Não espere sintomas para imobilizar." } ] } },
      { id: "7.3", titulo: "Número de vítimas e recursos", conteudo: { tipo: "texto", intro: "Antes de se aproximar de qualquer vítima, o socorrista precisa ter visão global da cena: quantas vítimas há, quais os recursos disponíveis e se é necessário acionar apoio.", blocos: [ { tipo: "card-grid", cards: [ { titulo: "1 a 2 vítimas", subtitulo: "Cena convencional", texto: "Equipe padrão consegue atender. Foco em avaliação individual e transporte adequado." }, { titulo: "3 a 5 vítimas", subtitulo: "Cena complexa", texto: "Pode exigir reforço. Iniciar triagem básica e priorizar as mais graves." }, { titulo: "Mais de 5 vítimas", subtitulo: "IMV", texto: "Acionar protocolo START imediatamente. Solicitar reforço antes de atendimento individual." }, { titulo: "Recursos na cena", subtitulo: "Levantamento obrigatório", texto: "Identifique: bombeiros, SAMU, PM, populares treinados, hospitais, helicóptero." } ] }, { tipo: "destaque", texto: "Em IMV: fazer o maior bem para o maior número. Isso pode significar não reanimar um paciente em PCR quando há outros sobreviventes sem atendimento." } ] } },
      { id: "7.4", titulo: "Impressão geral da vítima", conteudo: { tipo: "texto", intro: "Ao se aproximar da vítima, os primeiros segundos de observação fornecem informações valiosas antes de qualquer toque. Esta é a impressão geral — avaliação visual rápida e sistemática.", blocos: [ { tipo: "lista", titulo: "O que observar:", itens: ["Nível de consciência: responde ao chamado? Agitada ou sonolenta?","Posição: deformidades visíveis?","Respiração: movimento torácico? Rápida, lenta ou irregular?","Coloração da pele: pálida, cianótica, ruborizada?","Hemorragias visíveis: sangramento ativo?","Mecanismo aparente: objetos perfurantes, deformidade de membros"] }, { tipo: "destaque", texto: "Se a impressão geral indica vítima em risco imediato: chame ajuda, abra via aérea e inicie RCP. Não perca tempo com avaliação secundária." } ] } },
      { id: "7.5", titulo: "Comunicação com a regulação", conteudo: { tipo: "texto", intro: "A comunicação eficiente com a central de regulação médica é parte essencial da avaliação da cena. O médico regulador precisa de informações precisas para tomar decisões.", blocos: [ { tipo: "card-grid", cards: [ { titulo: "O que informar", subtitulo: "Dados obrigatórios", texto: "Endereço exato, tipo de ocorrência, número de vítimas, condição aparente e recursos no local." }, { titulo: "Como falar", subtitulo: "Comunicação objetiva", texto: "Voz calma, frases curtas, confirmação de recebimento. Evite termos vagos sem contexto clínico." }, { titulo: "Quando atualizar", subtitulo: "Tempo real", texto: "Sempre que houver mudança no quadro da vítima, novo recurso ou alteração de segurança." }, { titulo: "Protocolo SBAR", subtitulo: "Estrutura de comunicação", texto: "Situação → Background → Avaliação → Recomendação. Reduz erros de comunicação." } ] }, { tipo: "destaque", texto: "Nunca desligue o rádio sem confirmação de recebimento. A regulação médica é sua linha de segurança durante todo o atendimento." } ] } }
    ]
  },

  {
    id: 8, titulo: "Avaliação da Vítima", icone: "🩺", status: "disponivel",
    topicos: [
      { id: "8.1", titulo: "Avaliação primária — XABCDE (Trauma) e ABCDE (Clínico)", conteudo: { tipo: "texto", intro: "A avaliação primária no trauma segue o XABCDE (PHTLS 10ª ed., 2023). No paciente clínico sem hemorragia exsanguinante, aplica-se o ABCDE convencional. Ambos identificam e tratam ameaças imediatas à vida de forma sistemática.", blocos: [ { tipo: "destaque", texto: "PHTLS 10ª ed. (2023): no TRAUMA use XABCDE — X controla hemorragia exsanguinante ANTES da via aérea. No paciente CLÍNICO: ABCDE convencional." },
        { tipo: "cadeia", elos: [ { numero: 0, titulo: "X — Hemorragia Exsanguinante", icone: "🩸", cor: "#c53030", descricao: "eXsanguinating hemorrhage. Torniquete, tamponamento, gaze hemostática. Controlar ANTES da via aérea. SOMENTE NO TRAUMA." }, { numero: 0, titulo: "A — Via Aérea", icone: "💨", cor: "#e53e3e", descricao: "Airway com proteção cervical no trauma. Verificar permeabilidade, obstrução e necessidade de dispositivos." }, { numero: 0, titulo: "B — Ventilação", icone: "🫁", cor: "#dd6b20", descricao: "Breathing. Frequência, profundidade, simetria, SpO2. Tratar pneumotórax hipertensivo e hemotórax maciço." }, { numero: 0, titulo: "C — Circulação", icone: "❤️", cor: "#d69e2e", descricao: "Circulation. Pulso, PA, perfusão, acesso venoso, reposição volêmica cautelosa." }, { numero: 0, titulo: "D — Disfunção Neurológica", icone: "🧠", cor: "#38a169", descricao: "Disability. Glasgow, pupilas (tamanho, simetria, reatividade), glicemia capilar, déficit motor." }, { numero: 0, titulo: "E — Exposição", icone: "👀", cor: "#3182ce", descricao: "Expose. Expor completamente incluindo dorso. Identificar lesões ocultas. Prevenir hipotermia." } ] },
        { tipo: "card-grid", cards: [ { titulo: "XABCDE — Trauma", subtitulo: "PHTLS / ITLS / ATLS 10ª ed.", texto: "Sempre que houver suspeita de hemorragia significativa em trauma. X obrigatório antes da via aérea." }, { titulo: "ABCDE — Clínico", subtitulo: "ACLS / PALS / BLS", texto: "Emergências clínicas sem hemorragia exsanguinante: IAM, AVC, convulsão, dispneia. Segue A>B>C>D>E." } ] } ] } },
      { id: "8.2", titulo: "Escala de Coma de Glasgow", conteudo: { tipo: "texto", intro: "A Escala de Coma de Glasgow (ECGl) é a principal ferramenta para avaliação do nível de consciência no APH. Avalia três componentes independentes.", blocos: [ { tipo: "card-grid", cards: [ { titulo: "Abertura Ocular (O)", subtitulo: "Máx: 4 pontos", texto: "4: Espontânea | 3: Ao som | 2: À dor | 1: Nenhuma" }, { titulo: "Resposta Verbal (V)", subtitulo: "Máx: 5 pontos", texto: "5: Orientada | 4: Confusa | 3: Palavras | 2: Sons | 1: Nenhuma" }, { titulo: "Resposta Motora (M)", subtitulo: "Máx: 6 pontos", texto: "6: Obedece | 5: Localiza | 4: Flexão normal | 3: Flexão anormal | 2: Extensão | 1: Nenhuma" }, { titulo: "Interpretação", subtitulo: "Pontuação total (3–15)", texto: "15: Normal | 13–14: Leve | 9–12: Moderado | ≤8: Grave (IOT indicada)" } ] }, { tipo: "destaque", texto: "Glasgow ≤ 8: vítima sem condições de proteger a própria via aérea. Prioridade máxima para suporte ventilatório avançado." } ] } },
      { id: "8.3", titulo: "Sinais vitais", conteudo: { tipo: "texto", intro: "Os sinais vitais são parâmetros objetivos que refletem o estado fisiológico da vítima. No APH, devem ser aferidos rapidamente e repetidos durante o transporte.", blocos: [ { tipo: "card-grid", cards: [ { titulo: "Frequência Cardíaca", subtitulo: "Normal adulto: 60–100 bpm", texto: "Taquicardia >100: dor, choque, hipóxia. Bradicardia <60: hipóxia grave, intox., lesão medular." }, { titulo: "Frequência Respiratória", subtitulo: "Normal adulto: 12–20 irpm", texto: ">20: taquipneia (esforço, dor, acidose). <12: bradipneia (depressão do SNC, hipóxia grave)." }, { titulo: "Pressão Arterial", subtitulo: "Normal: ~120x80 mmHg", texto: "Hipotensão sistólica <90: sinal de alerta. Em trauma: suspeite hemorragia interna." }, { titulo: "SpO2 e Temperatura", subtitulo: "SpO2 normal >95%", texto: "SpO2 <92%: hipóxia com intervenção. Temperatura <35°C: hipotermia — risco no trauma." } ] }, { tipo: "paragrafo", texto: "No trauma grave, a tendência dos sinais vitais importa mais que um valor isolado. Pressão que cai progressivamente indica piora do quadro mesmo que o primeiro valor seja borderline." } ] } },
      { id: "8.4", titulo: "Anamnese — SAMPLE", conteudo: { tipo: "texto", intro: "A anamnese no APH deve ser rápida e direcionada. O mnemônico SAMPLE organiza as informações essenciais de forma eficiente.", blocos: [ { tipo: "lista", titulo: "SAMPLE:", itens: [ "S — Sinais e Sintomas: o que a vítima sente? Quando começou? Onde é a dor? Escala 0–10.", "A — Alergias: a algum medicamento, alimento ou substância?", "M — Medicações em uso: nome, dose, horário da última dose.", "P — Passado médico: doenças pré-existentes, cirurgias, internações.", "L — Última refeição/ingestão: quando comeu ou bebeu pela última vez?", "E — Eventos que levaram à situação: o que aconteceu? Como? Há quanto tempo?" ] }, { tipo: "destaque", texto: "SAMPLE salva vidas: saber que a vítima é diabética, alérgica à penicilina ou usa anticoagulante pode mudar completamente a conduta na cena." } ] } },
      { id: "8.5", titulo: "Avaliação secundária", conteudo: { tipo: "texto", intro: "A avaliação secundária é um exame físico céfalo-caudal sistematizado, realizado APÓS estabilização das prioridades do ABCDE. Busca lesões não identificadas na avaliação primária.", blocos: [ { tipo: "lista", titulo: "Sequência da avaliação secundária:", itens: [ "Cabeça: crânio, face, olhos, nariz, ouvidos, boca — hematomas, lacerações, líquor", "Pescoço: desvio de traqueia, distensão jugular, dor à palpação", "Tórax: expansibilidade, ausculta, crepitação, feridas abertas", "Abdome: rigidez, distensão, dor à palpação, sinais de trauma", "Pelve: instabilidade pélvica — palpar uma vez com cautela", "Membros: deformidades, pulsos distais, sensibilidade, mobilidade", "Dorso: palpação de coluna, lesões posteriores ocultas" ] }, { tipo: "paragrafo", texto: "A avaliação secundária no APH é orientada pela gravidade. Em vítima instável, o transporte imediato prevalece sobre a avaliação secundária completa na cena." } ] } }
    ]
  },

  {
    id: 9, titulo: "Suporte Básico de Vida", icone: "❤️", status: "disponivel",
    topicos: [
      { id: "9.1", titulo: "Reconhecimento da PCR", conteudo: { tipo: "texto", intro: "A parada cardiorrespiratória (PCR) é a cessação das funções cardíaca e respiratória. O reconhecimento rápido é o primeiro elo da cadeia de sobrevivência.", blocos: [ { tipo: "lista", titulo: "Como reconhecer a PCR:", itens: [ "Vítima irresponsiva: não responde à voz nem ao toque", "Ausência de respiração normal: sem movimentos torácicos ou gasping (respiração agônica)", "Ausência de pulso carotídeo (verificação por até 10 segundos — não retarde o início da RCP)", "Pele pálida, cianótica ou acinzentada" ] }, { tipo: "destaque", texto: "Gasping (respiração agônica) NÃO é respiração normal. Se a vítima estiver inconsciente com gasping: iniciar RCP imediatamente." }, { tipo: "card-grid", cards: [ { titulo: "Ritmos chocáveis", subtitulo: "FV e TV sem pulso", texto: "Fibrilação Ventricular e Taquicardia Ventricular sem pulso. DEA indicado." }, { titulo: "Ritmos não chocáveis", subtitulo: "Assistolia e AESP", texto: "Assistolia (linha reta) e Atividade Elétrica Sem Pulso. Apenas RCP + causa reversível." }, { titulo: "Causas reversíveis — 5H", subtitulo: "Hipóxia, Hipo/hipercalemia, H+, Hipotermia, Hipovolemia", texto: "Identificar e tratar a causa é parte essencial da ressuscitação." }, { titulo: "Causas reversíveis — 5T", subtitulo: "Tamponamento, Tensão (PTX), Trombose (IAM/TEP), Tóxicos, Trauma", texto: "Tratar a causa aumenta a chance de reversão da PCR." } ] } ] } },
      { id: "9.2", titulo: "Compressões torácicas", conteudo: { tipo: "texto", intro: "As compressões torácicas são o elemento mais importante da RCP. Uma compressão de qualidade mantém a perfusão coronariana e cerebral durante a PCR.", blocos: [ { tipo: "card-grid", cards: [ { titulo: "Posição das mãos", subtitulo: "Técnica correta", texto: "Calcanhares das mãos no centro do tórax (metade inferior do esterno). Dedos entrelaçados, braços estendidos." }, { titulo: "Profundidade", subtitulo: "Pelo menos 5 cm (máx 6 cm)", texto: "Compressões rasas são ineficazes. Profundas demais aumentam risco de lesão." }, { titulo: "Frequência", subtitulo: "100 a 120 compressões/min", texto: "Use o ritmo de 'Stayin' Alive' dos Bee Gees como referência (103 bpm)." }, { titulo: "Retorno completo", subtitulo: "Essencial entre compressões", texto: "Não apoiar o peso no tórax entre compressões. O retorno permite o enchimento cardíaco." } ] }, { tipo: "destaque", texto: "Minimize interrupções. Cada pausa nas compressões reduz a perfusão coronariana. Troque o compressor a cada 2 minutos para manter qualidade." } ] } },
      { id: "9.3", titulo: "Ventilação e relação C:V", conteudo: { tipo: "texto", intro: "A ventilação complementa as compressões na RCP. A relação correta entre compressões e ventilações varia conforme a presença de via aérea avançada.", blocos: [ { tipo: "card-grid", cards: [ { titulo: "Sem via aérea avançada", subtitulo: "Adulto", texto: "30 compressões : 2 ventilações. Pausar as compressões para ventilar." }, { titulo: "Com via aérea avançada", subtitulo: "IOT ou supraglótica", texto: "1 ventilação a cada 6 segundos (10/min), de forma assíncrona às compressões contínuas." }, { titulo: "Ventilação BVM", subtitulo: "Bolsa-Valva-Máscara", texto: "Volume suficiente para elevar o tórax (500–600 mL). Evite hiperventilar — aumenta pressão intratorácica." }, { titulo: "Crianças", subtitulo: "Pediátrico", texto: "Lactentes: 2 dedos no centro do tórax. Criança: 1 ou 2 mãos. Profundidade: 1/3 do diâmetro AP." } ] }, { tipo: "paragrafo", texto: "Se não houver equipamento de ventilação e o socorrista não estiver treinado para ventilação boca a boca, a RCP apenas com compressões (hands-only) é aceitável em adultos até chegada do DEA." } ] } },
      { id: "9.4", titulo: "Uso do DEA", conteudo: { tipo: "texto", intro: "O Desfibrilador Externo Automático (DEA) é um equipamento seguro, de fácil uso e que salva vidas. Qualquer pessoa treinada pode operá-lo.", blocos: [ { tipo: "lista", titulo: "Sequência de uso do DEA:", itens: [ "1. Ligar o DEA assim que disponível — não interrompa as compressões para buscá-lo", "2. Posicionar as pás: uma abaixo da clavícula direita, outra na linha axilar esquerda", "3. Afastar todos: 'Ninguém toca na vítima!'", "4. Aguardar análise do ritmo pelo DEA", "5. Se indicado: aplicar o choque ao apertar o botão", "6. Reiniciar compressões IMEDIATAMENTE após o choque (não espere verificar pulso)", "7. Repetir a cada 2 minutos até chegada do SAV ou retorno da circulação" ] }, { tipo: "destaque", texto: "Em crianças: usar pás pediátricas ou modo pediátrico se disponível. Na ausência, usar pás adultas com posicionamento anterior-posterior." } ] } },
      { id: "9.5", titulo: "Situações especiais de RCP", conteudo: { tipo: "texto", intro: "Algumas situações exigem adaptações na técnica de RCP ou decisões específicas no APH.", blocos: [ { tipo: "card-grid", cards: [ { titulo: "Gestante", subtitulo: "Adaptação obrigatória", texto: "Deslocar o útero manualmente para a esquerda ou inclinação da prancha 15–30° para aliviar compressão da veia cava." }, { titulo: "Hipotermia", subtitulo: "Não parar precocemente", texto: "'Não está morto até estar quente e morto.' RCP contínua até reaquecimento, exceto lesões incompatíveis com vida." }, { titulo: "Afogamento", subtitulo: "5 ventilações iniciais", texto: "Iniciar com 5 ventilações de resgate antes das compressões, pois hipóxia é a causa primária." }, { titulo: "Quando não iniciar RCP", subtitulo: "Decisão médica e legal", texto: "Sinais de morte biológica: rigidez, livores, decapitação, carbonização. Decisão comunicada à regulação." } ] }, { tipo: "paragrafo", texto: "O retorno da circulação espontânea (RCE) é reconhecido por: pulso palpável, respiração espontânea, movimentação voluntária e recuperação da consciência." } ] } }
    ]
  },

  {
    id: 10, titulo: "Atualização AHA 2025", icone: "📡", status: "disponivel",
    topicos: [
      { id: "10.1", titulo: "O que mudou com a AHA 2025", conteudo: { tipo: "texto", intro: "As diretrizes AHA (American Heart Association) são revisadas a cada 5 anos com base em evidências científicas. As atualizações de 2020 e 2025 trouxeram mudanças importantes que todo socorrista precisa conhecer.", blocos: [
        { tipo: "destaque", texto: "As diretrizes AHA 2025 mantêm o foco em: compressões de ALTA QUALIDADE, minimização de pausas, desfibrilação precoce e cuidados pós-PCR estruturados." },
        { tipo: "card-grid", cards: [
          { titulo: "Compressões de alta qualidade", subtitulo: "O mais importante", texto: "Frequência 100–120/min, profundidade ≥5cm (máx 6cm), retorno completo do tórax, mínimo de pausas (<10 seg). Sem mudança — reforço." },
          { titulo: "Relação C:V sem via aérea avançada", subtitulo: "Mantida: 30:2", texto: "Adultos e crianças com 2 socorristas: 30:2. Com via aérea avançada: compressões contínuas + 1 ventilação a cada 6 segundos." },
          { titulo: "Tempo para verificação de pulso", subtitulo: "Máximo 10 segundos", texto: "Verificação de pulso por mais de 10 segundos é inaceitável. Se incerto: iniciar RCP. Melhor iniciar RCP desnecessária do que atrasar em PCR real." },
          { titulo: "DEA em lactentes", subtitulo: "Nova recomendação", texto: "DEA com pás pediátricas pode ser usado em lactentes (<1 ano) quando não houver desfibrilador manual disponível." }
        ]}
      ]}},
      { id: "10.2", titulo: "RCP em situações especiais — AHA 2025", conteudo: { tipo: "texto", intro: "A AHA 2025 detalhou protocolos para situações especiais de PCR que diferem do padrão adulto.", blocos: [
        { tipo: "card-grid", cards: [
          { titulo: "Afogamento", subtitulo: "5 ventilações antes das compressões", texto: "PCR por afogamento é hipóxica. Iniciar com 5 ventilações de resgate antes das compressões torácicas — diferente do padrão adulto." },
          { titulo: "PCR por overdose de opioides", subtitulo: "Naloxona + RCP", texto: "Administrar naloxona (IM ou intranasal) enquanto realiza RCP. Não substituir RCP pela naloxona — manter ambas simultaneamente." },
          { titulo: "PCR em gestante", subtitulo: "Deslocamento uterino manual", texto: "Deslocar o útero manualmente para a esquerda durante as compressões. Se PCR >4 min sem RCES: considerar cesariana de emergência (5 min para bebê)." },
          { titulo: "Hipotermia grave", subtitulo: "RCP contínua até reaquecimento", texto: "'Não está morto até estar quente e morto.' Manter RCP em hipotermia grave (<30°C) até reaquecimento em ambiente hospitalar." }
        ]},
        { tipo: "destaque", texto: "AHA 2025 reforça: em OVACE com PCR, verificar a boca antes de cada tentativa de ventilação e remover o objeto SOMENTE se visível. Varredura digital cega está ABOLIDA." }
      ]}},
      { id: "10.3", titulo: "Cuidados pós-PCR — AHA 2025", conteudo: { tipo: "texto", intro: "O retorno da circulação espontânea (RCES) não é o fim do tratamento — é o início de uma fase crítica. A AHA 2025 enfatiza os cuidados pós-PCR como um protocolo estruturado.", blocos: [
        { tipo: "card-grid", cards: [
          { titulo: "Controle Direcionado da Temperatura (CDT)", subtitulo: "Neuroproteção", texto: "Manter temperatura corporal entre 32–36°C por 24h após RCES em pacientes comatosos. Previne lesão neurológica secundária." },
          { titulo: "Normóxia após RCES", subtitulo: "SpO2 alvo 94–98%", texto: "Evitar hiperóxia após RCES — O2 a 100% pós-retorno pode causar lesão por radicais livres. Titular O2 para SpO2 94–98%." },
          { titulo: "Normocapnia", subtitulo: "EtCO2 alvo 35–45 mmHg", texto: "Hipocapnia (hiperventilação) causa vasoconstrição cerebral. Hipercapnia piora edema cerebral. Manter ventilação controlada." },
          { titulo: "Hemodinâmica pós-RCES", subtitulo: "PA alvo ≥90 mmHg sistólica", texto: "Hipotensão pós-RCES piora o prognóstico neurológico. Administrar vasopressores conforme protocolo se necessário." }
        ]},
        { tipo: "lista", titulo: "O que fazer imediatamente após o RCES no APH:", itens: [
          "Verificar SpO2 e titular O2 para 94–98%",
          "Verificar frequência e profundidade da ventilação — evitar hiper e hipoventilar",
          "Monitorizar PA: se sistólica <90 mmHg → reposição volêmica e comunicar regulação",
          "Verificar glicemia: hipoglicemia e hiperglicemia grave pioram o prognóstico neurológico",
          "Registrar o horário do RCES",
          "Comunicar ao hospital receptor: tempo de PCR, ciclos de RCP, medicamentos, RCES"
        ]}
      ]}},
      { id: "10.4", titulo: "Cadeia de sobrevivência atualizada — AHA 2025", conteudo: { tipo: "texto", intro: "A AHA 2025 revisou a cadeia de sobrevivência para enfatizar a continuidade do cuidado desde o reconhecimento até a recuperação.", blocos: [
        { tipo: "cadeia", elos: [
          { numero: 1, titulo: "Vigilância e prevenção", icone: "🔍", cor: "#e53e3e", descricao: "NOVO: identificar pacientes em risco antes da PCR — monitorização hospitalar e educação da população." },
          { numero: 2, titulo: "Reconhecimento e acionamento", icone: "📞", cor: "#dd6b20", descricao: "Reconhecer PCR em até 10 segundos e acionar o socorro imediatamente (192/193)." },
          { numero: 3, titulo: "RCP de alta qualidade", icone: "🤲", cor: "#d69e2e", descricao: "Compressões imediatas, fortes, rápidas, com retorno completo e mínimo de pausas." },
          { numero: 4, titulo: "Desfibrilação precoce", icone: "⚡", cor: "#38a169", descricao: "DEA o mais rápido possível. Cada minuto sem desfibrilação em FV reduz a sobrevida em 7–10%." },
          { numero: 5, titulo: "Suporte avançado de vida", icone: "🏥", cor: "#3182ce", descricao: "Equipe médica com drogas, via aérea avançada e monitorização." },
          { numero: 6, titulo: "Recuperação", icone: "💚", cor: "#805ad5", descricao: "NOVO elo: reabilitação física, neurológica e psicológica pós-PCR. Suporte ao sobrevivente e à família." }
        ]},
        { tipo: "destaque", texto: "Novidade AHA 2025: 'Vigilância e Prevenção' e 'Recuperação' são os novos elos que expandem a cadeia para além da ressuscitação aguda." }
      ]}},
      { id: "10.5", titulo: "Pediatria — atualizações AHA 2025", conteudo: { tipo: "texto", intro: "As diretrizes pediátricas de 2025 trazem refinamentos importantes para RCP em crianças e lactentes.", blocos: [
        { tipo: "card-grid", cards: [
          { titulo: "Compressões em lactente", subtitulo: "2 socorristas: técnica dos 2 polegares", texto: "Com 2 socorristas: mãos circundando o tórax, 2 polegares no centro. Mais eficaz que 2 dedos. Com 1 socorrista: 2 dedos." },
          { titulo: "Profundidade em crianças", subtitulo: "1/3 do diâmetro AP do tórax", texto: "Criança: aproximadamente 5 cm. Lactente: aproximadamente 4 cm. Não usar valores absolutos — proporcional ao tamanho." },
          { titulo: "Relação C:V pediátrica", subtitulo: "1 socorrista: 30:2 / 2 socorristas: 15:2", texto: "Com 2 profissionais de saúde atendendo criança: 15:2 (mais ventilações). Com 1 socorrista ou leigo: 30:2." },
          { titulo: "DEA em lactentes", subtitulo: "Atualização 2025", texto: "DEA com pás pediátricas é aceitável em lactentes (<1 ano) quando desfibrilador manual não estiver disponível. Antes era contraindicado." }
        ]},
        { tipo: "destaque", texto: "Em PCR pediátrica: a causa mais frequente é RESPIRATÓRIA — não cardíaca. Por isso as ventilações têm mais peso na RCP pediátrica do que na do adulto. Nunca negligenciar a via aérea." }
      ]}}
    ]
  },

  {
    id: 11, titulo: "Via Aérea, Ventilação e Desobstrução", icone: "🫁", status: "disponivel",
    topicos: [
      { id: "11.1", titulo: "Anatomia da via aérea", conteudo: { tipo: "texto", intro: "Conhecer a anatomia da via aérea é fundamental para identificar obstruções e escolher a técnica adequada de abertura e manutenção.", blocos: [ { tipo: "lista", titulo: "Via aérea superior:", itens: [ "Nariz e boca: porta de entrada do ar", "Faringe (oro, naso e laringofaringe): compartimento comum para ar e alimento", "Laringe: estrutura cartilaginosa que protege a traqueia. Contém as cordas vocais.", "Epiglote: válvula que fecha a traqueia durante a deglutição" ] }, { tipo: "lista", titulo: "Via aérea inferior:", itens: [ "Traqueia: conduz o ar até os pulmões", "Brônquios principais: direito (mais vertical — corpo estranho entra mais facilmente) e esquerdo", "Brônquios lobares e segmentares", "Alvéolos: local da troca gasosa" ] }, { tipo: "destaque", texto: "Obstrução de via aérea superior é causa imediata de morte. A identificação e resolução rápida são a prioridade máxima no ABCDE." } ] } },
      { id: "11.2", titulo: "Abertura e manutenção da via aérea", conteudo: { tipo: "texto", intro: "Em vítimas inconscientes, a língua é a principal causa de obstrução da via aérea. As manobras de abertura devem ser dominadas por todo socorrista.", blocos: [ { tipo: "card-grid", cards: [ { titulo: "Hiperextensão + queixo", subtitulo: "Sem suspeita de trauma", texto: "Uma mão na testa, dedos sob o queixo. Estende a cabeça e eleva o queixo. Simples e eficaz." }, { titulo: "Tração mandibular", subtitulo: "Com suspeita de trauma cervical", texto: "Dedos nas bordas da mandíbula, tracionar anteriormente sem mover a coluna cervical." }, { titulo: "Cânula Orofaríngea (Guedel)", subtitulo: "Vítima inconsciente sem reflexo de gag", texto: "Impede que a língua obstrua a faringe. Medir do lóbulo da orelha até a comissura labial." }, { titulo: "Cânula Nasofaríngea", subtitulo: "Vítima semi-consciente ou com trauma oral", texto: "Tolerada por vítimas com algum nível de consciência. Contraindicada em fraturas de base do crânio." } ] }, { tipo: "destaque", texto: "Nunca use cânula orofaríngea em vítima consciente ou com reflexo de gag presente — pode causar vômito e broncoaspiração." } ] } },
      { id: "11.3", titulo: "Obstrução por corpo estranho", conteudo: { tipo: "texto", intro: "A obstrução de via aérea por corpo estranho (OVACE) pode ser parcial ou total, e o tratamento depende da gravidade e do nível de consciência.", blocos: [ { tipo: "card-grid", cards: [ { titulo: "Obstrução parcial", subtitulo: "Tosse eficaz", texto: "Estimular a vítima a continuar tossindo. NÃO interfira — a tosse é o melhor mecanismo de desobstrução." }, { titulo: "Obstrução total — Consciente", subtitulo: "Manobra de Heimlich", texto: "Posicionar-se atrás da vítima. Punho fechado entre umbigo e esterno. Compressões abdominais rápidas para dentro e para cima." }, { titulo: "Obstrução total — Inconsciente", subtitulo: "PCR por OVACE", texto: "Deitar a vítima. Iniciar RCP. Antes de cada ventilação, verificar a boca. Se visualizar o objeto: remover." }, { titulo: "Lactente com OVACE", subtitulo: "Técnica específica", texto: "5 golpes nas costas + 5 compressões torácicas. Alternados até desobstrução ou inconsciência." } ] }, { tipo: "destaque", texto: "Nunca faça varredura às cegas com o dedo na boca da vítima. Remova o objeto apenas se estiver visível." } ] } },
      { id: "11.4", titulo: "Ventilação com dispositivos", conteudo: { tipo: "texto", intro: "A ventilação assistida é indicada quando a vítima não respira adequadamente ou está em apneia. Os dispositivos disponíveis no APH variam conforme o nível de complexidade.", blocos: [ { tipo: "card-grid", cards: [ { titulo: "Bolsa-Valva-Máscara (BVM)", subtitulo: "Dispositivo principal no APH básico", texto: "Volume: 500–600 mL (adulto). Frequência: 10–12/min. Observar elevação do tórax. Requere treinamento para boa vedação." }, { titulo: "Máscara de bolso (pocket mask)", subtitulo: "Ventilação boca-máscara", texto: "Barreira protetora entre socorrista e vítima. Permite maior volume e menor fadiga que a BVM sozinha." }, { titulo: "Oxigênio suplementar", subtitulo: "Quando oferecer", texto: "SpO2 <94%: cateter nasal 2–4 L/min. SpO2 <90%: máscara facial 8–12 L/min. PCR: O2 100% sempre." }, { titulo: "Dispositivos supraglóticos", subtitulo: "Máscara laríngea e correlatos", texto: "Inserção mais simples que IOT. Não protege 100% contra aspiração mas é alternativa eficaz no APH." } ] }, { tipo: "destaque", texto: "Hiperventilar é tão perigoso quanto hipoventilar. Volume excessivo aumenta pressão intratorácica, reduz retorno venoso e pode distender o estômago (risco de vômito e aspiração)." } ] } },
      { id: "11.5", titulo: "Pneumotórax e hemotórax", conteudo: { tipo: "texto", intro: "Lesões torácicas com comprometimento respiratório exigem reconhecimento rápido no APH. Pneumotórax hipertensivo e hemotórax maciço são emergências com risco de morte imediato.", blocos: [ { tipo: "card-grid", cards: [ { titulo: "Pneumotórax simples", subtitulo: "Ar no espaço pleural", texto: "Dor torácica, dispneia, murmúrio vesicular reduzido unilateralmente. Tratamento definitivo: drenagem." }, { titulo: "Pneumotórax hipertensivo", subtitulo: "Emergência imediata", texto: "Desvio de traqueia CONTRALATERAL, hipotensão, estase jugular, ausência de MV, cianose. Descompressão de emergência." }, { titulo: "Pneumotórax aberto", subtitulo: "Ferida torácica aspirante", texto: "Curativo de três lados (oclusivo em três lados, aberto em um para escape de ar)." }, { titulo: "Hemotórax maciço", subtitulo: "Sangue na cavidade pleural", texto: ">1500 mL de sangue. Hipotensão + ausência de MV + macicez à percussão. Drenagem e reposição volêmica." } ] }, { tipo: "destaque", texto: "Pneumotórax hipertensivo = emergência que mata em minutos. Reconhecer clinicamente — não espere confirmação radiológica para descomprimir." } ] } },
      { id: "11.6", titulo: "OVACE — conceito e reconhecimento", conteudo: { tipo: "texto", intro: "A Obstrução de Via Aérea por Corpo Estranho (OVACE) é uma das emergências mais dramáticas e tratáveis do APH. O reconhecimento imediato e a intervenção correta salvam vidas.", blocos: [
        { tipo: "card-grid", cards: [
          { titulo: "Obstrução parcial", subtitulo: "Via aérea ainda funcional", texto: "Tosse eficaz, consegue falar, estridor leve. CONDUTA: estimular a tosse. Não intervir com manobras externas." },
          { titulo: "Obstrução total", subtitulo: "Via aérea comprometida", texto: "Sinal universal (mãos no pescoço), incapaz de falar ou tossir, cianose progressiva, agitação. CONDUTA: intervenção imediata." },
          { titulo: "Vítima inconsciente", subtitulo: "Colapso por OVACE", texto: "Inconsciência, apneia, cianose. Deitar, iniciar RCP, verificar boca antes de cada ventilação." },
          { titulo: "Causas mais frequentes", subtitulo: "Por faixa etária", texto: "Adultos: alimentos (carne, pão). Crianças: objetos pequenos, balas, brinquedos. Idosos: disfagia neurológica." }
        ]},
        { tipo: "destaque", texto: "Sinal universal de engasgo: mãos no pescoço com expressão de angústia. Reconheça imediatamente — cada segundo importa na OVACE total." }
      ]}},
      { id: "11.7", titulo: "Manobras em adultos e crianças — AHA 2020 atualizado", conteudo: { tipo: "texto", intro: "As diretrizes mais recentes da American Heart Association (AHA 2020) e da ILCOR mantêm as manobras clássicas com refinamentos importantes baseados em evidências.", blocos: [
        { tipo: "lista", titulo: "Adulto consciente com OVACE grave:", itens: [
          "1. Confirmar obstrução: 'Você está engasgado?' Se não consegue responder: agir",
          "2. Posicionar-se ao lado e levemente atrás da vítima",
          "3. 5 golpes interescapulares (nas costas) com a base da mão — firmes e secos",
          "4. 5 compressões abdominais (Heimlich): punho entre umbigo e esterno, outra mão por cima, para dentro e para cima",
          "5. Alternar 5 golpes + 5 Heimlich até desobstrução ou perda de consciência"
        ]},
        { tipo: "card-grid", cards: [
          { titulo: "Criança >1 ano", subtitulo: "Mesma sequência do adulto adaptada", texto: "Golpes nas costas + compressões abdominais com menos força. Ajoelhar ou agachar para ficar na altura da criança." },
          { titulo: "Lactente <1 ano", subtitulo: "Técnica diferente — NUNCA Heimlich", texto: "5 golpes interescapulares em decúbito ventral no antebraço + 5 compressões torácicas em decúbito dorsal. Alternar até desobstrução." },
          { titulo: "Grávida ou obesa", subtitulo: "Compressões torácicas no lugar do Heimlich", texto: "Ponto de aplicação: metade inferior do esterno. Mesma força das compressões de RCP. Não comprimir o abdome." },
          { titulo: "Vítima solitária que engasga", subtitulo: "Auto-Heimlich", texto: "Fazer compressão abdominal com as próprias mãos ou jogar o abdome contra uma superfície firme (borda de cadeira, mesa)." }
        ]},
        { tipo: "destaque", texto: "AHA 2020: a combinação de golpes nas costas + compressões abdominais é mais eficaz que usar apenas uma técnica isolada. Alterne sempre as duas." }
      ]}},
      { id: "11.8", titulo: "OVACE em vítima inconsciente", conteudo: { tipo: "texto", intro: "Quando a vítima com OVACE perde a consciência, a abordagem muda completamente. A RCP passa a ser o protocolo central, com adaptações específicas.", blocos: [
        { tipo: "lista", titulo: "Sequência para OVACE com colapso — AHA 2020:", itens: [
          "1. Deitar a vítima com segurança no chão",
          "2. Acionar o socorro (192 ou 193) ou solicitar que alguém acione",
          "3. Iniciar compressões torácicas — o aumento de pressão intratorácica pode expelir o objeto",
          "4. ANTES de cada tentativa de ventilação: abrir a boca e verificar se o objeto está visível",
          "5. Se visível: remover com o dedo — NUNCA fazer varredura cega",
          "6. Tentar 2 ventilações — se não entrar ar, continuar as compressões",
          "7. Repetir o ciclo até desobstrução ou chegada do SAV"
        ]},
        { tipo: "destaque", texto: "Varredura digital CEGA está ABOLIDA das diretrizes. Remove o objeto APENAS se estiver VISÍVEL na boca aberta. Varredura cega pode empurrar o objeto para mais fundo." },
        { tipo: "card-grid", cards: [
          { titulo: "Laringoscopia na cena", subtitulo: "APH avançado", texto: "Equipes com médico ou enfermeiro especializado podem usar laringoscópio + pinça de Magill para remoção sob visão direta. Técnica mais eficaz disponível." },
          { titulo: "Cricotireotomia de emergência", subtitulo: "Último recurso — OVACE intransponível", texto: "Acesso à via aérea abaixo da obstrução. Técnica médica ou de enfermagem avançada. Indicada quando todas as outras manobras falharam e a vítima está em hipóxia grave." }
        ]}
      ]}},
      { id: "11.9", titulo: "Situações especiais de OVACE", conteudo: { tipo: "texto", intro: "Algumas populações e contextos exigem adaptações técnicas ou raciocínio diferenciado no manejo da OVACE.", blocos: [
        { tipo: "card-grid", cards: [
          { titulo: "OVACE em idosos", subtitulo: "Maior fragilidade óssea", texto: "Risco de fratura de costelas com Heimlich/compressões. Manter a técnica, mas comunicar ao serviço receptor. A obstrução é mais grave que a lesão potencial." },
          { titulo: "OVACE em traqueostomizados", subtitulo: "Via aérea artificial", texto: "Obstrução pode ocorrer na cânula. Tentar aspirar. Se não resolver: remover a cânula e ventilar pela abertura da traqueostomia com máscara adaptada." },
          { titulo: "OVACE por prótese dentária", subtitulo: "Adultos e idosos", texto: "Prótese solta pode deslocar e obstruir. Se visível e acessível: remover manualmente. Não tentar remover às cegas." },
          { titulo: "OVACE em vítima de PCR prévia", subtitulo: "Diagnóstico diferencial", texto: "Vítima em PCR que não ventila apesar de via aérea aberta: suspeitar de OVACE. Verificar a boca antes de cada ventilação no ciclo de RCP." }
        ]},
        { tipo: "destaque", texto: "Em crianças: a maioria das OVACE é por objetos sólidos (brinquedos, moedas, alimentos duros). Prevenção é o melhor tratamento — supervisão constante de crianças menores de 3 anos." }
      ]}},
      { id: "11.10", titulo: "Pós-desobstrução — cuidados e acompanhamento", conteudo: { tipo: "texto", intro: "Após a resolução da OVACE, mesmo que a vítima aparente estar bem, cuidados específicos são necessários.", blocos: [
        { tipo: "lista", titulo: "Cuidados obrigatórios pós-desobstrução:", itens: [
          "Avaliar via aérea: possível lesão laríngea ou traqueal pelo corpo estranho ou pelas manobras",
          "Avaliar respiração: hipóxia pode ter ocorrido — SpO2, frequência, esforço",
          "Avaliar possíveis lesões pelas manobras: fratura de costelas, lesão abdominal",
          "Toda vítima de OVACE deve ser avaliada em serviço de saúde, mesmo após resolução espontânea",
          "Objeto pode não ter saído completamente — risco de nova obstrução",
          "Em criança: radiografia de tórax e abdome para localizar objeto se não for recuperado"
        ]},
        { tipo: "card-grid", cards: [
          { titulo: "Lesão pelas manobras de Heimlich", subtitulo: "Complicação possível", texto: "Laceração hepática, ruptura gástrica, fraturas costais. Avaliar abdome e tórax. Comunicar ao serviço receptor que manobras foram realizadas." },
          { titulo: "Comunicar à regulação", subtitulo: "Informação obrigatória", texto: "Relatar: tipo de objeto suspeito, número de ciclos realizados, tempo de obstrução, nível de consciência durante o episódio e estado atual." }
        ]},
        { tipo: "destaque", texto: "Desobstrução realizada com sucesso não é fim do atendimento — é início do pós-evento. Transporte e avaliação hospitalar são obrigatórios em TODA OVACE, independente da evolução clínica imediata." }
      ]}}
    ]
  },

  {
    id: 12, titulo: "Controle de Hemorragias", icone: "🩹", status: "disponivel",
    topicos: [
      { id: "12.1", titulo: "Tipos e classificação de hemorragias", conteudo: { tipo: "texto", intro: "Hemorragia é a perda de sangue dos vasos sanguíneos. O reconhecimento do tipo e da gravidade orienta a conduta imediata.", blocos: [ { tipo: "card-grid", cards: [ { titulo: "Arterial", subtitulo: "Alta pressão, sangue vermelho vivo", texto: "Sangramento pulsátil, em jato. Mais grave — risco de morte em minutos se não controlado." }, { titulo: "Venosa", subtitulo: "Fluxo contínuo, sangue escuro", texto: "Sangramento constante, de maior volume. Grave em vasos calibrosos. Controlável com pressão." }, { titulo: "Capilar", subtitulo: "Sangramento em lençol", texto: "Pequenas quantidades, superficial. Geralmente de controle mais fácil. Menor urgência." }, { titulo: "Interna", subtitulo: "Sem sangramento externo visível", texto: "Suspeitar por mecanismo + sinais de choque. Diagnóstico hospitalar. APH: transporte urgente." } ] }, { tipo: "lista", titulo: "Classes do choque hemorrágico:", itens: [ "Classe I: até 15% do volume (750 mL). Sintomas mínimos.", "Classe II: 15–30% (750–1500 mL). Taquicardia, ansiedade, pele fria.", "Classe III: 30–40% (1500–2000 mL). Hipotensão, taquipneia, confusão.", "Classe IV: >40% (>2000 mL). Colapso, inconsciência, risco de morte." ] } ] } },
      { id: "12.2", titulo: "Pressão direta e curativos", conteudo: { tipo: "texto", intro: "A pressão direta é o método mais eficaz, simples e disponível para controle de hemorragia externa. Deve ser a primeira intervenção em todo sangramento visível.", blocos: [ { tipo: "lista", titulo: "Técnica de pressão direta:", itens: [ "Usar EPI (luvas) antes de qualquer contato com sangue", "Aplicar gaze ou pano limpo diretamente sobre a ferida", "Pressionar firme e constante com a palma da mão por no mínimo 10 minutos", "NÃO retirar o curativo se encharcado — adicionar mais gazes por cima", "Manter a pressão durante o transporte" ] }, { tipo: "card-grid", cards: [ { titulo: "Curativo compressivo", subtitulo: "Para manter a pressão", texto: "Atadura elástica sobre a gaze. Firme, sem comprometer circulação distal." }, { titulo: "Gaze hemostática", subtitulo: "QuikClot, Combat Gauze", texto: "Impregnada com agentes coagulantes. Indicada para feridas profundas em cavidades que não permitem pressão externa." }, { titulo: "Tamponamento de ferida", subtitulo: "Wound packing", texto: "Preencher feridas cavitárias (axila, virilha, pescoço) com gaze, aplicando pressão digital por 3 minutos." }, { titulo: "Elevação do membro", subtitulo: "Complemento à pressão", texto: "Elevar o membro lesionado acima do nível do coração para reduzir a pressão hidrostática no local." } ] } ] } },
      { id: "12.3", titulo: "Torniquete", conteudo: { tipo: "texto", intro: "O torniquete é um dispositivo que interrompe o fluxo sanguíneo distal ao local de aplicação. Salva vidas em hemorragias graves de membros.", blocos: [ { tipo: "destaque", texto: "O torniquete deixou de ser 'último recurso' — é PRIMEIRA escolha em hemorragias graves de membros que ameaçam a vida." }, { tipo: "lista", titulo: "Indicações do torniquete:", itens: [ "Hemorragia arterial em membro que não responde à pressão direta", "Amputação traumática", "Ferimento com múltiplos pontos de sangramento impossíveis de controlar individualmente", "Cena insegura que impede compressão manual contínua" ] }, { tipo: "lista", titulo: "Técnica de aplicação:", itens: [ "Posicionar 5–7 cm acima do ferimento (nunca sobre a articulação)", "Apertar até cessação do sangramento e perda do pulso distal", "Anotar horário de aplicação em local visível (testa, membro, ficha de atendimento)", "NÃO remover no ambiente pré-hospitalar", "Nunca cobrir o torniquete" ] }, { tipo: "card-grid", cards: [ { titulo: "CAT (Combat Application Tourniquet)", subtitulo: "Torniquete mais usado no APH", texto: "Rápida aplicação, inclusive com uma mão. Padrão para serviços de emergência." }, { titulo: "Improvisado", subtitulo: "Apenas se não houver comercial", texto: "Tiras largas (>5 cm) para evitar lesão por pressão pontual. Nunca use fios, cordas ou cadarços finos." } ] } ] } },
      { id: "12.4", titulo: "Choque — reconhecimento e conduta", conteudo: { tipo: "texto", intro: "O choque é a falência do sistema circulatório em manter perfusão adequada dos tecidos. No APH, o choque hipovolêmico hemorrágico é o mais frequente.", blocos: [ { tipo: "lista", titulo: "Sinais e sintomas de choque:", itens: [ "Taquicardia (>100 bpm) — primeiro sinal compensatório", "Pele fria, pálida e úmida (suor frio)", "Enchimento capilar lento (>2 segundos)", "Sede intensa e ansiedade", "Alteração do nível de consciência (sonolência, confusão)", "Hipotensão (sinal tardio — não espere para diagnosticar choque!)" ] }, { tipo: "card-grid", cards: [ { titulo: "Posicionamento", subtitulo: "Posição de Trendelenburg modificada", texto: "Elevar membros inferiores 30° para melhorar retorno venoso (exceto TCE, trauma torácico ou respiratório)." }, { titulo: "Controle da causa", subtitulo: "Prioridade máxima", texto: "Estancar o sangramento antes de qualquer outra medida. Sem controle da causa, o tratamento do choque é ineficaz." }, { titulo: "Prevenção de hipotermia", subtitulo: "A tríade da morte", texto: "Hipotermia + acidose + coagulopatia = tríade letal. Aquecer a vítima e o ambiente dentro da ambulância." }, { titulo: "Acesso venoso", subtitulo: "Reposição volêmica", texto: "Soro fisiológico 0,9% conforme protocolo médico. Em trauma: evitar excesso de volume antes do controle da hemorragia." } ] } ] } },
      { id: "12.5", titulo: "Hemorragias especiais", conteudo: { tipo: "texto", intro: "Algumas hemorragias têm características anatômicas específicas que exigem condutas diferenciadas no APH.", blocos: [ { tipo: "card-grid", cards: [ { titulo: "Epistaxe (sangramento nasal)", subtitulo: "Conduta", texto: "Sentar a vítima com cabeça levemente inclinada para FRENTE. Comprimir as asas do nariz por 10–15 min. Nunca inclinar para trás (aspiração)." }, { titulo: "Ferida na cabeça/couro cabeludo", subtitulo: "Sangramento abundante", texto: "Pressão direta com gaze. Atenção: volume de sangue pode ser enganoso — avaliar se há TCE associado." }, { titulo: "Hemorragia abdominal fechada", subtitulo: "Não comprimir!", texto: "Suspeitar por mecanismo + distensão + rigidez. Transporte imediato. Não aplicar pressão externa sobre abdome." }, { titulo: "Amputação traumática", subtitulo: "Conduta dupla", texto: "Torniquete no coto. Conservar o segmento amputado em gaze úmida estéril, dentro de saco plástico, sobre gelo (não em contato direto)." } ] }, { tipo: "destaque", texto: "Sangramento em região de virilha, axila ou pescoço: usar gaze hemostática + tamponamento digital. Torniquete é impossível nessas regiões." } ] } }
    ]
  },

  {
    id: 13, titulo: "Trauma", icone: "🦴", status: "disponivel",
    topicos: [
      { id: "13.1", titulo: "Abordagem ao politraumatizado — XABCDE", conteudo: { tipo: "texto", intro: "O politraumatizado é a vítima com múltiplas lesões, muitas vezes envolvendo dois ou mais sistemas orgânicos. A abordagem segue o protocolo XABCDE.", blocos: [ { tipo: "cadeia", elos: [ { numero: 0, titulo: "X — Hemorragia exsanguinante", icone: "🩸", cor: "#e53e3e", descricao: "Controlar sangramento maciço ANTES de qualquer outra intervenção." }, { numero: 0, titulo: "A — Via aérea + cervical", icone: "💨", cor: "#dd6b20", descricao: "Manter alinhamento cervical. Abrir via aérea sem hiperextensão." }, { numero: 0, titulo: "B — Ventilação", icone: "🫁", cor: "#d69e2e", descricao: "Avaliar frequência, profundidade, simetria. Tratar pneumotórax hipertensivo." }, { numero: 0, titulo: "C — Circulação", icone: "❤️", cor: "#38a169", descricao: "Controle de hemorragias. Acesso venoso. Avaliar perfusão." }, { numero: 0, titulo: "D — Disfunção neurológica", icone: "🧠", cor: "#3182ce", descricao: "Glasgow, pupilas, déficit motor. Suspeitar de TCE e lesão medular." }, { numero: 0, titulo: "E — Exposição", icone: "👀", cor: "#805ad5", descricao: "Expor completamente. Avaliar o dorso. Prevenir hipotermia." } ] }, { tipo: "destaque", texto: "TEMPO É TUDO no politrauma. 'Scoop and run' em instáveis: estabilize o que é estabilizável na cena e transporte. Cirurgia é o tratamento definitivo." } ] } },
      { id: "13.2", titulo: "Traumatismo crânio-encefálico", conteudo: { tipo: "texto", intro: "O TCE é uma das principais causas de morte e sequela em vítimas de trauma. O APH tem papel fundamental na prevenção do dano cerebral secundário.", blocos: [ { tipo: "card-grid", cards: [ { titulo: "TCE Leve", subtitulo: "Glasgow 13–15", texto: "Pode haver perda de consciência breve, cefaleia, náusea. Observação e transporte para avaliação." }, { titulo: "TCE Moderado", subtitulo: "Glasgow 9–12", texto: "Maior risco de lesão intracraniana. Monitorização contínua e transporte imediato." }, { titulo: "TCE Grave", subtitulo: "Glasgow ≤ 8", texto: "Risco imediato de herniação. Suporte ventilatório, normóxia (SpO2 94–98%), normocapnia. EVITAR hiperventilação." }, { titulo: "Sinais de alerta", subtitulo: "Herniação iminente", texto: "Anisocoria (pupilas assimétricas), postura de decorticação/descerebração, piora rápida do Glasgow." } ] }, { tipo: "destaque", texto: "No TCE grave: evitar hipotensão e hipóxia a qualquer custo. São as duas principais causas de lesão cerebral secundária e aumentam a mortalidade dramaticamente." } ] } },
      { id: "13.3", titulo: "Trauma de coluna vertebral", conteudo: { tipo: "texto", intro: "A suspeita de lesão de coluna vertebral deve ser considerada em todo trauma de alta energia, especialmente com mecanismo de flexão-extensão, queda ou impacto direto.", blocos: [ { tipo: "lista", titulo: "Quando suspeitar de lesão cervical:", itens: [ "Mecanismo de alta energia: capotamento, impacto frontal, queda >1 metro", "Trauma em mergulho em água rasa", "Dor ou sensibilidade cervical à palpação", "Déficit neurológico nos membros (dormência, formigamento, fraqueza)", "Nível de consciência alterado que impede avaliação confiável" ] }, { tipo: "card-grid", cards: [ { titulo: "Imobilização manual", subtitulo: "Primeiro passo", texto: "Manter a cabeça em posição neutra com as duas mãos. Não mover até imobilização definitiva." }, { titulo: "Colar cervical", subtitulo: "Complemento à imobilização", texto: "Limita movimentos, mas não imobiliza sozinho. Sempre associar à imobilização manual e prancha." }, { titulo: "Prancha longa", subtitulo: "Extricação e transporte", texto: "Retirada coordenada da vítima mantendo eixo cabeça-pescoço-tronco alinhado. Mínimo 3 socorristas." }, { titulo: "KED (Kendrick)", subtitulo: "Extricação de veículo", texto: "Colete de extricação usado para retirar a vítima presa em veículo sem mobilizar a coluna." } ] } ] } },
      { id: "13.4", titulo: "Trauma de tórax e abdome", conteudo: { tipo: "texto", intro: "Lesões torácicas e abdominais podem ser silenciosas no início e rapidamente fatais. O APH foca no reconhecimento e estabilização para transporte urgente.", blocos: [ { tipo: "card-grid", cards: [ { titulo: "Fratura de costelas", subtitulo: "Dor à respiração", texto: "Múltiplas fraturas consecutivas = tórax instável (flail chest). Tratamento: ventilação de pressão positiva." }, { titulo: "Contusão pulmonar", subtitulo: "Lesão do parênquima", texto: "Hipóxia progressiva horas após o trauma. Suporte com O2 e ventilação adequada." }, { titulo: "Tamponamento cardíaco", subtitulo: "Tríade de Beck", texto: "Hipotensão + estase jugular + abafamento das bulhas. Pericardiocentese de emergência (SAV)." }, { titulo: "Trauma abdominal", subtitulo: "Vísceras maciças e ocas", texto: "Baço e fígado são os mais lesionados no trauma fechado. Evisceração: curativo úmido, não recolocar alças." } ] }, { tipo: "destaque", texto: "Trauma abdominal fechado com sinais de choque = hemorragia interna até prova em contrário. Transporte imediato. Não perca tempo na cena." } ] } },
      { id: "13.5", titulo: "Trauma de membros e pelve", conteudo: { tipo: "texto", intro: "Fraturas podem causar perdas sanguíneas significativas e complicações sistêmicas. A imobilização adequada reduz a dor, o sangramento e o risco de lesão neurovascular.", blocos: [ { tipo: "card-grid", cards: [ { titulo: "Fratura de fêmur", subtitulo: "Perda de 1500–2000 mL", texto: "Imobilizar com tração. Verificar pulso distal antes e depois da imobilização. Risco de choque." }, { titulo: "Fratura de pelve", subtitulo: "Perda de até 4 litros", texto: "Não testar estabilidade repetidamente. Cinto pélvico de emergência ou lençol dobrado para compressão." }, { titulo: "Fratura exposta", subtitulo: "Osso visível", texto: "NÃO recolocar o osso. Curativo estéril úmido sobre a ferida. Imobilizar no posição encontrada." }, { titulo: "Síndrome do esmagamento", subtitulo: "Crush syndrome", texto: "Liberação de mioglobina após descompressão de músculo isquemiado. Hidratação agressiva antes da descompressão." } ] }, { tipo: "lista", titulo: "Antes e após imobilizar: sempre verificar:", itens: [ "Pulso distal ao foco de fratura", "Sensibilidade (formigamento, dormência)", "Motricidade dos dedos distais", "Temperatura e coloração do membro" ] } ] } }
    ]
  },

  {
    id: 14, titulo: "Queimaduras", icone: "🔥", status: "disponivel",
    topicos: [
      { id: "14.1", titulo: "Classificação das queimaduras", conteudo: { tipo: "texto", intro: "As queimaduras são lesões teciduais causadas por agentes térmicos, químicos, elétricos ou radioativos. A classificação orienta o tratamento e a gravidade.", blocos: [
        { tipo: "card-grid", cards: [
          { titulo: "1º Grau — Superficial", subtitulo: "Epiderme apenas", texto: "Eritema (vermelhidão), dor ao toque, sem bolhas. Exemplo: queimadura de sol. Cicatriza espontaneamente em 3–5 dias. NÃO conta no cálculo de SCQ." },
          { titulo: "2º Grau Superficial", subtitulo: "Epiderme + derme superficial", texto: "Bolhas, base eritematosa e úmida, DOR INTENSA (terminações nervosas preservadas). Cicatriza em 14–21 dias com cuidados adequados." },
          { titulo: "2º Grau Profundo", subtitulo: "Derme profunda comprometida", texto: "Bolhas, base pálida ou avermelhada, dor reduzida (destruição parcial de nervos). Cicatriza lentamente, pode necessitar enxerto." },
          { titulo: "3º Grau — Espessura total", subtitulo: "Toda a pele + estruturas profundas", texto: "Carbonização ou aspecto de couro, INDOLOR (destruição de nervos), sem bolhas. Exige enxerto. Toda a espessura da pele destruída." }
        ]},
        { tipo: "destaque", texto: "Regra prática: dói muito = 2º grau (nervos intactos). Não dói = 3º grau (nervos destruídos). Mas na prática as queimaduras mistas são as mais comuns." }
      ]}},
      { id: "14.2", titulo: "Cálculo da superfície corporal queimada", conteudo: { tipo: "texto", intro: "Estimar a extensão da queimadura é fundamental para definir a gravidade, a necessidade de internação e o volume de reposição volêmica.", blocos: [
        { tipo: "card-grid", cards: [
          { titulo: "Regra dos Nove — Adulto", subtitulo: "Wallace", texto: "Cabeça: 9% | Cada braço: 9% | Tórax anterior: 18% | Dorso: 18% | Cada MMII: 18% | Períneo: 1%. Total = 100%." },
          { titulo: "Regra dos Nove — Criança", subtitulo: "Lund-Browder (mais preciso)", texto: "Cabeça maior proporcionalmente (até 18% em lactente). Membros inferiores menores. Usar tabela de Lund-Browder para crianças." },
          { titulo: "Regra da Palma da Mão", subtitulo: "Queimaduras irregulares", texto: "A palma da mão da vítima (incluindo dedos) = 1% da SCQ. Útil para calcular áreas irregulares ou pequenas queimaduras dispersas." },
          { titulo: "O que contar no cálculo", subtitulo: "Apenas 2º e 3º graus", texto: "1º grau NÃO entra no cálculo de SCQ. Contar apenas 2º e 3º grau para definir gravidade e reposição volêmica." }
        ]},
        { tipo: "lista", titulo: "Critérios de internação em queimados:", itens: [
          "2º grau > 10% da SCQ em adultos / > 5% em crianças ou idosos",
          "Qualquer queimadura de 3º grau",
          "Queimadura em face, mãos, pés, genitália, períneo ou grandes articulações",
          "Queimadura por inalação (via aérea comprometida)",
          "Queimadura elétrica ou química",
          "Queimaduras circunferenciais (risco de síndrome compartimental)"
        ]}
      ]}},
      { id: "14.3", titulo: "Atendimento pré-hospitalar em queimaduras", conteudo: { tipo: "texto", intro: "Os primeiros cuidados no APH influenciam diretamente a evolução da queimadura. Medidas simples e corretas fazem diferença significativa.", blocos: [
        { tipo: "lista", titulo: "Sequência de atendimento no APH:", itens: [
          "1. Segurança da cena: afastar a vítima da fonte sem se expor (queimadura química, elétrica, incêndio)",
          "2. Interromper o processo de queimadura: remover roupas e objetos não aderidos (anéis, relógios)",
          "3. Resfriar com água em temperatura AMBIENTE por 10–20 min (não gelada — piora a hipotermia)",
          "4. Avaliar ABCDE: via aérea em prioridade (queimadura de inalação pode fechar em horas)",
          "5. Colocar curativo não aderente sobre a queimadura (gaze parafinada ou campo estéril úmido)",
          "6. Prevenção de hipotermia: aquecer o ambiente e cobrir áreas não queimadas",
          "7. Acesso venoso e analgesia conforme protocolo",
          "8. Transporte ao hospital de referência"
        ]},
        { tipo: "destaque", texto: "NUNCA aplicar: gelo (hipotermia e vasoconstrição), manteiga, pasta dental, creme ou qualquer produto caseiro. Causam infecção, dificultam a avaliação e podem piorar a queimadura." }
      ]}},
      { id: "14.4", titulo: "Queimaduras especiais: elétrica, química e inalação", conteudo: { tipo: "texto", intro: "Queimaduras por agentes especiais têm particularidades que exigem condutas diferenciadas e maior atenção da equipe de APH.", blocos: [
        { tipo: "card-grid", cards: [
          { titulo: "Queimadura Elétrica", subtitulo: "Condutas específicas", texto: "Desligar a fonte ANTES de aproximar (risco de choque para o socorrista). A lesão interna é sempre maior que a externa. Risco de: rabdomiólise, arritmias, PCR. Monitorização cardíaca obrigatória." },
          { titulo: "Queimadura Química", subtitulo: "Ácidos e álcalis", texto: "Lavar com água corrente abundante por no mínimo 20 minutos. Não usar neutralizante (reação exotérmica piora a lesão). Remover roupas e joias contaminadas com EPI." },
          { titulo: "Queimadura por Inalação", subtitulo: "A mais perigosa", texto: "Suspeitar em: incêndio em ambiente fechado, fuligem nas narinas, sobrancelhas chamuscadas, rouquidão, estridor. Via aérea pode fechar rapidamente — IOT precoce se disponível." },
          { titulo: "Intoxicação por CO", subtitulo: "Monóxido de carbono", texto: "Inodoro e incolor — 'assassino silencioso'. Cefaleia, náusea, confusão, coma. SpO2 normal (CO liga na hemoglobina igual O2). Tratamento: O2 100% máscara com reservatório." }
        ]},
        { tipo: "destaque", texto: "Queimadura elétrica: a ferida de entrada pode parecer pequena, mas o trajeto elétrico interno pode destruir músculos, vasos e causar PCR. Tratar sempre como trauma de alta energia." }
      ]}},
      { id: "14.5", titulo: "Reposição volêmica e cuidados contínuos", conteudo: { tipo: "texto", intro: "Grandes queimados perdem volume plasmático rapidamente pelo aumento da permeabilidade capilar. A reposição volêmica precoce e adequada é fundamental.", blocos: [
        { tipo: "card-grid", cards: [
          { titulo: "Fórmula de Parkland", subtitulo: "Reposição nas primeiras 24h", texto: "Ringer Lactato: 4 mL × peso (kg) × % SCQ. 50% nas primeiras 8h. 50% nas 16h seguintes. Calculada a partir da hora da queimadura, não da chegada ao hospital." },
          { titulo: "Diurese como parâmetro", subtitulo: "Monitorização da volemia", texto: "Adulto: 0,5 mL/kg/h. Criança: 1 mL/kg/h. Rabdomiólise (queimadura elétrica): 1–2 mL/kg/h para eliminar mioglobina." },
          { titulo: "Analgesia", subtitulo: "Dor intensa e contínua", texto: "2º grau = dor intensa. Analgesia adequada reduz o estresse, diminui liberação de catecolaminas e melhora a cooperação. Conforme protocolo médico." },
          { titulo: "Prevenção de hipotermia", subtitulo: "Risco grave em grandes queimados", texto: "Grande SCQ = grande perda de calor. Cobrir com campos estéreis, aquecer a ambulância (28°C), soluções aquecidas quando possível." }
        ]},
        { tipo: "destaque", texto: "O grande queimado precisa de centro especializado. No APH: estabilizar a via aérea, iniciar reposição, prevenir hipotermia e transportar ao hospital de referência para queimados." }
      ]}}
    ]
  },

  {
    id: 15, titulo: "Afogamento", icone: "🌊", status: "disponivel",
    topicos: [
      { id: "15.1", titulo: "Conceito, epidemiologia e classificação", conteudo: { tipo: "texto", intro: "O afogamento é a segunda causa de morte acidental no Brasil. A abordagem correta no APH pode reverter casos que parecem sem esperança.", blocos: [
        { tipo: "destaque", texto: "DEFINIÇÃO OMS/ILCOR: Afogamento é o processo de comprometimento respiratório resultante de submersão ou imersão em um líquido. Pode ou não resultar em morte." },
        { tipo: "card-grid", cards: [
          { titulo: "Grau 1", subtitulo: "Tosse sem espuma", texto: "Via aérea mantida. Boa perfusão. Melhor prognóstico. Ausculta normal ou com leve broncoespasmo." },
          { titulo: "Grau 2", subtitulo: "Pouca espuma, boa perfusão", texto: "Algum comprometimento da troca gasosa. Ausculta com poucos estertores. Necessita de O2." },
          { titulo: "Grau 3", subtitulo: "Espuma moderada, hipotensão", texto: "Comprometimento significativo. Edema pulmonar em formação. SpO2 reduzida. Risco de evolução rápida." },
          { titulo: "Grau 4", subtitulo: "Espuma abundante, choque", texto: "Edema pulmonar grave. Hipotensão. Cianose. Alto risco de deterioração para PCR." }
        ]},
        { tipo: "card-grid", cards: [
          { titulo: "Grau 5", subtitulo: "Apneia, pulso presente", texto: "Parada respiratória sem PCR. Ventilação imediata com BVM. Tempo crítico para evitar a PCR." },
          { titulo: "Grau 6", subtitulo: "PCR — Parada completa", texto: "Apneia + ausência de pulso. Pior prognóstico, mas recuperações são possíveis. RCP imediata com ênfase nas ventilações." },
          { titulo: "Água salgada vs. doce", subtitulo: "Faz diferença?", texto: "Na prática clínica: não há diferença significativa no tratamento. O mecanismo principal é a hipóxia em ambos os casos." },
          { titulo: "Hipotermia no afogamento", subtitulo: "Fator protetor e complicador", texto: "Água fria pode proteger o cérebro (hipotermia protetora). Mas também complica a RCP e exige reaquecimento. Manter RCP até hospital." }
        ]}
      ]}},
      { id: "15.2", titulo: "Resgate com segurança", conteudo: { tipo: "texto", intro: "O resgate de vítima de afogamento é potencialmente fatal para o socorrista despreparado. A segurança do resgatista é sempre a primeira prioridade.", blocos: [
        { tipo: "card-grid", cards: [
          { titulo: "Alcançar", subtitulo: "Sem entrar na água", texto: "Estender um galho, cabo elétrico, corda, toalha. Sempre que possível, resgatar sem entrar na água." },
          { titulo: "Jogar", subtitulo: "Boia ou objeto flutuante", texto: "Arremessar boia salva-vidas, galão vazio, câmara de ar para a vítima se agarrar e ser puxada." },
          { titulo: "Remar", subtitulo: "Embarcação para o resgate", texto: "Aproximar com barco, prancha ou outro equipamento. Manter distância da vítima que pode se agarrar e afundar o socorrista." },
          { titulo: "Nadar — ÚLTIMO recurso", subtitulo: "Com equipamento e treinamento", texto: "Entrar na água SOMENTE com colete salva-vidas, corda de segurança e treinamento específico. Vítima em pânico pode afogar o socorrista." }
        ]},
        { tipo: "destaque", texto: "REGRA DO BOMBEIRO: Alcançar, Jogar, Remar, Nadar — nessa ordem. Um socorrista afogado é mais uma vítima. O melhor resgate é o que salva a vítima SEM criar novas vítimas." }
      ]}},
      { id: "15.3", titulo: "Atendimento e RCP no afogamento", conteudo: { tipo: "texto", intro: "A RCP no afogamento tem particularidades importantes em relação ao padrão do adulto. A hipóxia é a causa primária — as ventilações são prioridade.", blocos: [
        { tipo: "lista", titulo: "Sequência de atendimento no afogamento — AHA 2025:", itens: [
          "1. Resgatar com segurança — não entrar na água sem EPI e treinamento",
          "2. Iniciar ventilações de resgate AINDA NA ÁGUA se possível (sem atrasar o resgate)",
          "3. Ao sair da água: avaliar nível de consciência e respiração",
          "4. Se inconsciente e sem respiração: 5 VENTILAÇÕES DE RESGATE antes das compressões",
          "5. Se sem pulso após as ventilações: iniciar RCP 30:2",
          "6. DEA assim que disponível — ritmos chocáveis são menos comuns no afogamento (predomina assistolia)",
          "7. Prevenir hipotermia: remover roupas molhadas, cobrir, aquecer",
          "8. Transporte imediato — todo afogado, mesmo com recuperação aparente, deve ir ao hospital"
        ]},
        { tipo: "card-grid", cards: [
          { titulo: "Proteção cervical no afogamento", subtitulo: "Quando é necessária?", texto: "Apenas se houver história de mergulho em água rasa, trauma associado ou sinais de lesão cervical. Na maioria dos afogamentos: não é necessária e atrasa o atendimento." },
          { titulo: "Manobra de Heimlich no afogamento", subtitulo: "Contraindicada", texto: "NÃO fazer Heimlich para retirar água dos pulmões. Sem evidência de benefício, atrasa a RCP e pode causar lesão abdominal e vômito com broncoaspiração." },
          { titulo: "'Drowned but not dead'", subtitulo: "Nunca desistir precocemente", texto: "Afogados em água fria com hipotermia podem ser recuperados após longos períodos de PCR. Manter RCP até o hospital. Decisão de interrupção é médica." },
          { titulo: "Síndrome de imersão", subtitulo: "Colapso reflexo no contato com água fria", texto: "Parada cardíaca reflexa por imersão súbita em água muito fria. RCP imediata — prognóstico pode ser surpreendentemente bom com reaquecimento." }
        ]}
      ]}},
      { id: "15.4", titulo: "Cuidados pós-resgate e transporte", conteudo: { tipo: "texto", intro: "Todo afogado, mesmo que aparentemente bem após o resgate, deve ser transportado e avaliado em ambiente hospitalar. O edema pulmonar pode se desenvolver horas depois.", blocos: [
        { tipo: "card-grid", cards: [
          { titulo: "Afogamento secundário", subtitulo: "Risco nas primeiras 24h", texto: "Edema pulmonar pode se desenvolver horas após o incidente, mesmo em vítimas que pareciam bem. Todo afogado deve ser observado por no mínimo 6–24h no hospital." },
          { titulo: "Monitorização no transporte", subtitulo: "Parâmetros críticos", texto: "SpO2 (alvo >95%), FR, FC, PA, temperatura, nível de consciência. Qualquer deterioração deve ser comunicada à regulação." },
          { titulo: "Hipotermia", subtitulo: "Tratamento no transporte", texto: "Remover roupas molhadas, cobrir com cobertores secos, aquecer o interior da ambulância, soluções aquecidas se disponíveis. Não friccionar." },
          { titulo: "O2 suplementar", subtitulo: "Todo afogado deve receber", texto: "Mesmo SpO2 >95%: O2 por máscara facial a 10–12 L/min por 30 min. Pulmões afogados podem ter edema subclínico nas primeiras horas." }
        ]},
        { tipo: "destaque", texto: "REGRA: todo afogado vai ao hospital. Não existe 'tá bem, pode ir pra casa' na cena de afogamento. O edema pulmonar tardio pode ser fatal se não monitorado." }
      ]}},
      { id: "15.5", titulo: "Prevenção e situações especiais", conteudo: { tipo: "texto", intro: "A prevenção do afogamento é responsabilidade de saúde pública. O socorrista também tem papel educativo na comunidade.", blocos: [
        { tipo: "card-grid", cards: [
          { titulo: "Afogamento em piscina", subtitulo: "Principal causa em crianças", texto: "Silencioso e rápido — criança submersa não grita. Supervisão constante, grades de proteção, alarmes. Iniciar RCP imediatamente ao resgatar." },
          { titulo: "Afogamento em rio com correnteza", subtitulo: "Técnica de resgate", texto: "Não nadar contra a correnteza — nadar em diagonal para a margem. Usar boia e corda. Risco de afogamento em cachoeiras por sucção." },
          { titulo: "Afogamento em mar", subtitulo: "Corrente de retorno", texto: "Corrente de retorno (rip current): não nadar contra ela — nadar paralelo à praia até sair da corrente. Principal causa de afogamento no litoral." },
          { titulo: "Mergulho em água rasa", subtitulo: "TCE + afogamento", texto: "Risco duplo: TCE com lesão cervical + afogamento. Proteção cervical obrigatória. Resgatar com o mínimo de movimento da coluna." }
        ]},
        { tipo: "lista", titulo: "Fatores de risco para afogamento:", itens: [
          "Criança sem supervisão perto de qualquer lâmina d'água",
          "Uso de álcool e drogas próximo à água (responsável por 25-50% dos afogamentos em adultos)",
          "Ausência de habilidade de natação",
          "Epilepsia sem controle adequado",
          "Natação em rios e represas sem balizamento e guardas-vidas"
        ]}
      ]}}
    ]
  },

  {
    id: 16, titulo: "Emergências Clínicas", icone: "⚕️", status: "disponivel",
    topicos: [
      { id: "16.1", titulo: "Emergências cardiovasculares — IAM e Edema Pulmonar", conteudo: { tipo: "texto", intro: "As emergências cardiovasculares representam as principais causas de morte súbita. O reconhecimento precoce e a ativação do sistema de saúde são determinantes.", blocos: [
        { tipo: "card-grid", cards: [
          { titulo: "IAM — Reconhecimento", subtitulo: "Infarto Agudo do Miocárdio", texto: "Dor precordial opressiva, irradiação para braço esquerdo/mandíbula, sudorese, náusea, dispneia. Pode ser silencioso em diabéticos e idosos." },
          { titulo: "IAM — Conduta no APH", subtitulo: "Ação imediata", texto: "Repouso, monitorização, O2 se SpO2 <94%, acesso venoso, ECG se disponível, AAS 300mg se não contraindicado. Ativar protocolo de dor torácica." },
          { titulo: "Edema Agudo de Pulmão", subtitulo: "Dispneia grave", texto: "Ortopneia, estertores bilaterais, expectoração rósea/espumosa. Posição sentada, O2 alto fluxo, monitorização, comunicar regulação." },
          { titulo: "Dissecção Aórtica", subtitulo: "Dor em rasgo dorsal", texto: "Dor torácica/dorsal intensa em 'rasgo', diferença de PA entre os braços, pulsos assimétricos. Transporte urgente ao hospital de referência." }
        ]},
        { tipo: "destaque", texto: "Na dor torácica aguda: sempre suspeitar de IAM. Acionar o serviço receptor pelo caminho — o tempo 'porta-balão' é determinante para a sobrevida." }
      ]}},
      { id: "16.2", titulo: "AVC — Acidente Vascular Cerebral", conteudo: { tipo: "texto", intro: "O AVC é uma emergência tempo-dependente. A janela terapêutica para trombólise no AVC isquêmico é de até 4,5 horas do início dos sintomas.", blocos: [
        { tipo: "destaque", texto: "FAST: Face (assimetria) + Arm (braço caído) + Speech (fala alterada) + Time (acionar socorro imediatamente)." },
        { tipo: "card-grid", cards: [
          { titulo: "AVC Isquêmico", subtitulo: "80% dos casos", texto: "Oclusão arterial. Déficit focal súbito. Candidato à trombólise se dentro da janela terapêutica." },
          { titulo: "AVC Hemorrágico", subtitulo: "20% dos casos", texto: "Rotura de vaso. Cefaleia intensa súbita, vômitos, rigidez de nuca. Maior gravidade." },
          { titulo: "AIT", subtitulo: "Ataque Isquêmico Transitório", texto: "Déficit que regride. ALTA probabilidade de AVC nas próximas 24h. Tratar como urgência." },
          { titulo: "Conduta no APH", subtitulo: "Ação imediata", texto: "Anotar horário EXATO dos primeiros sintomas, monitorização, glicemia, O2, comunicar hospital receptor." }
        ]}
      ]}},
      { id: "16.3", titulo: "Emergências respiratórias", conteudo: { tipo: "texto", intro: "Crises respiratórias agudas podem evoluir rapidamente para insuficiência respiratória e PCR. A intervenção precoce é fundamental.", blocos: [
        { tipo: "card-grid", cards: [
          { titulo: "Crise de Asma Grave", subtitulo: "Broncoespasmo agudo", texto: "Sibilos, musculatura acessória, taquicardia. Broncodilatador inalatório, O2, posição sentada. Silêncio no tórax = sinal de gravidade extrema." },
          { titulo: "DPOC Descompensada", subtitulo: "Exacerbação aguda", texto: "Dispneia em repouso, cianose. O2 CONTROLADO (SpO2 alvo 88–92% no DPOC). Evitar hiperóxia." },
          { titulo: "Embolia Pulmonar", subtitulo: "Dispneia súbita inexplicada", texto: "Dispneia súbita, taquicardia, dor pleurítica, hemoptise. Fatores de risco: TVP, imobilização, neoplasia." },
          { titulo: "Insuficiência Respiratória", subtitulo: "Via aérea avançada", texto: "SpO2 <88% refratária, esforço extremo, rebaixamento de consciência: ventilar com BVM. Comunicar regulação." }
        ]}
      ]}},
      { id: "16.4", titulo: "Emergências neurológicas e metabólicas", conteudo: { tipo: "texto", intro: "Alterações do nível de consciência de origem neurológica ou metabólica são frequentes no APH. A glicemia deve ser verificada em todo paciente com alteração de consciência.", blocos: [
        { tipo: "card-grid", cards: [
          { titulo: "Hipoglicemia", subtitulo: "Glicemia < 70 mg/dL", texto: "Tremores, sudorese, confusão, inconsciência. Consciente: glicose oral. Inconsciente: glicose 50% IV ou glucagon IM." },
          { titulo: "Hiperglicemia / CAD", subtitulo: "Glicemia muito elevada", texto: "Polidipsia, poliúria, hálito cetônico, respiração de Kussmaul. Hidratação e transporte." },
          { titulo: "Convulsões", subtitulo: "Crise epiléptica", texto: "Proteger de lesões, posição lateral após a crise, O2, não segurar. Status >5 min: BDZ se disponível." },
          { titulo: "Sepse / Meningite", subtitulo: "Emergência infecciosa", texto: "Febre, rigidez de nuca, petéquias, alteração de consciência. Risco de choque séptico. Transporte imediato." }
        ]},
        { tipo: "destaque", texto: "Todo paciente com alteração de consciência sem causa aparente: verificar glicemia capilar ANTES de qualquer outra conduta. Hipoglicemia é a causa mais tratável." }
      ]}},
      { id: "16.5", titulo: "Anafilaxia e emergências ambientais", conteudo: { tipo: "texto", intro: "Reações alérgicas graves e emergências por causas ambientais exigem reconhecimento rápido e tratamento imediato.", blocos: [
        { tipo: "card-grid", cards: [
          { titulo: "Anafilaxia", subtitulo: "Alérgeno → reação sistêmica grave", texto: "Urticária, angioedema, broncoespasmo, hipotensão. ADRENALINA IM (0,3–0,5mg) é o tratamento de 1ª escolha. Anti-histamínico e corticoide são adjuvantes." },
          { titulo: "Choque Anafilático", subtitulo: "Colapso circulatório", texto: "Adrenalina IM + Trendelenburg + reposição volêmica agressiva." },
          { titulo: "Hipertermia / Insolação", subtitulo: "Temperatura >40°C", texto: "Confusão, pele quente e seca, colapso. Resfriar imediatamente: sombra, roupas, compressas frias, hidratação." },
          { titulo: "Hipotermia", subtitulo: "Temperatura < 35°C", texto: "Tremores, confusão, arritmias. Remover roupas molhadas, isolar do frio, aquecer gradativamente. RCP se PCR." }
        ]}
      ]}}
    ]
  },

  {
    id: 17, titulo: "Agitação Psicomotora", icone: "🧠", status: "disponivel",
    topicos: [
      { id: "17.1", titulo: "Conceito, causas e avaliação", conteudo: { tipo: "texto", intro: "A agitação psicomotora é um estado de hiperatividade motora e verbal que compromete a cooperação da vítima e pode representar risco para ela, para a equipe e para terceiros.", blocos: [
        { tipo: "card-grid", cards: [
          { titulo: "Causas orgânicas — AEIOU TIPS", subtitulo: "Sempre descartar primeiro", texto: "Álcool/drogas, Epilepsia, Insulina (hipoglicemia), Overdose/Óxido de carbono, Uremia | Trauma (TCE), Infecção (sepse/meningite), Psiquiátrico, Stroke (AVC)" },
          { titulo: "Hipoglicemia", subtitulo: "Causa mais comum e tratável", texto: "Todo agitado: medir glicemia ANTES de qualquer outra abordagem. Glicemia <70 mg/dL: glicose oral (se consciente) ou 50% IV (se não)." },
          { titulo: "Intoxicação por substâncias", subtitulo: "Mais frequente", texto: "Álcool, cocaína, anfetaminas, inalantes, maconha sintética (K2/Spice). Identificar substância — orienta o tratamento e os antídotos disponíveis." },
          { titulo: "Causas psiquiátricas", subtitulo: "Diagnóstico de exclusão", texto: "Crise maníaca, esquizofrenia, psicose aguda, transtorno dissociativo. Tratar apenas após descartar causas orgânicas reversíveis." }
        ]},
        { tipo: "destaque", texto: "REGRA DE OURO: agitação = causa orgânica até prova em contrário. Nunca assuma que é 'só psiquiátrico' antes de verificar glicemia, SpO2 e história clínica." }
      ]}},
      { id: "17.2", titulo: "Abordagem verbal e não-verbal", conteudo: { tipo: "texto", intro: "A comunicação é a primeira linha de intervenção em vítima agitada consciente. Uma abordagem verbal eficaz pode evitar contenção física e reduzir o risco de lesões.", blocos: [
        { tipo: "lista", titulo: "Técnicas de abordagem verbal (De-escalada):", itens: [
          "Apresentar-se calmamente: 'Meu nome é Marco, sou enfermeiro, estou aqui para ajudar'",
          "Usar voz calma, tom baixo e ritmo lento — não combater agitação com agitação",
          "Manter distância segura (2–3 metros) e postura não ameaçadora",
          "Fazer contato visual respeitoso — não encarar de forma dominante",
          "Usar linguagem simples e perguntas abertas: 'Como você está se sentindo?'",
          "Evitar ordens e ultimatos — oferecer escolhas quando possível",
          "Reconhecer a emoção sem validar o comportamento: 'Entendo que você está com raiva'"
        ]},
        { tipo: "card-grid", cards: [
          { titulo: "Posicionamento da equipe", subtitulo: "Segurança no atendimento", texto: "Equipe em semicírculo, sem bloquear a saída da vítima. Uma pessoa fala (liderança verbal) — as outras observam e aguardam sem interagir." },
          { titulo: "Retirada de objetos perigosos", subtitulo: "Avaliação ambiental", texto: "Remover discretamente objetos que possam ser usados como arma: faqueiros, objetos de vidro, ferramentas. Sem chamar atenção para isso." },
          { titulo: "Quando a verbal falha", subtitulo: "Decisão de contenção", texto: "Se a vítima representa risco imediato para si ou para a equipe e não responde à abordagem verbal: preparar contenção com equipe suficiente." },
          { titulo: "Apoio policial", subtitulo: "Quando solicitar", texto: "Cena com risco de violência para a equipe, arma presente, múltiplos agredores. Aguardar liberação policial — segurança primeiro." }
        ]}
      ]}},
      { id: "17.3", titulo: "Contenção física — técnica e cuidados", conteudo: { tipo: "texto", intro: "A contenção física é o último recurso após falha da abordagem verbal. Deve ser executada com técnica correta para garantir segurança da vítima e da equipe.", blocos: [
        { tipo: "lista", titulo: "Protocolo de contenção física:", itens: [
          "Mínimo 4–5 pessoas: 1 por membro + 1 para a cabeça",
          "Coordenação: uma pessoa comanda ('vamos conter ao sinal de 3: 1, 2, 3')",
          "Posição: decúbito DORSAL — NUNCA prona (risco fatal de asfixia posicional)",
          "Imobilizar membros com fixadores ou ataduras — não com força manual contínua",
          "Manter a cabeça em posição neutra — evitar hiperextensão ou flexão",
          "Um socorrista monitora via aérea, respiração e nível de consciência continuamente",
          "Registrar horário de início da contenção na ficha de atendimento"
        ]},
        { tipo: "destaque", texto: "POSIÇÃO PRONA EM AGITADO É PROIBIDA. Risco de asfixia posicional — compressão torácica + hiperflexão do pescoço + esforço muscular = morte. Sempre decúbito DORSAL." },
        { tipo: "card-grid", cards: [
          { titulo: "Síndrome de Excitação Aguda (ExDS)", subtitulo: "Emergência médica", texto: "Agitação extrema, hipertermia, força supra-normal, insensibilidade à dor, diaforese. ALTO risco de PCR súbita. Contenção + SAV urgente + comunicar regulação." },
          { titulo: "Monitorização pós-contenção", subtitulo: "Obrigatória e contínua", texto: "SpO2, FR, FC, coloração e nível de consciência a cada 2–3 minutos. A contenção pode descompensar vítimas com condições clínicas subjacentes." }
        ]}
      ]}},
      { id: "17.4", titulo: "Sedação farmacológica e aspectos legais", conteudo: { tipo: "texto", intro: "A sedação farmacológica em vítimas agitadas é prerrogativa médica ou de enfermeiro com prescrição médica. O técnico de enfermagem administra conforme orientação.", blocos: [
        { tipo: "card-grid", cards: [
          { titulo: "Midazolam", subtitulo: "BDZ — primeira escolha frequente", texto: "0,05–0,1 mg/kg IM/IV. Sedação leve a moderada. Antídoto: flumazenil. Depressão respiratória possível — monitorizar." },
          { titulo: "Haloperidol", subtitulo: "Antipsicótico clássico", texto: "5–10 mg IM em adultos. Indicado em psicose aguda e agitação sem causa orgânica. Efeito tardio (30–60 min IM). Risco de distonias agudas." },
          { titulo: "Cetamina", subtitulo: "Dissociativo — SAV", texto: "1–2 mg/kg IV ou 4–6 mg/kg IM. Rápido início. Mantém via aérea e reflexos. Usada em ExDS e quando outras drogas falham. Exige equipe treinada." },
          { titulo: "Quem pode administrar", subtitulo: "Responsabilidade legal", texto: "Médico regulador via rádio ou protocolo médico assinado pelo médico responsável. Técnico de enfermagem administra conforme prescrição — NUNCA por iniciativa própria." }
        ]},
        { tipo: "lista", titulo: "Aspectos legais da contenção e sedação:", itens: [
          "Contenção sem justificativa documentada pode configurar constrangimento ilegal",
          "Registrar na ficha: tentativas de abordagem verbal, motivo da contenção, horário, posição e monitorização",
          "Sedação sem prescrição médica é exercício ilegal da medicina (CP Art. 282)",
          "Em risco de morte iminente: beneficência justifica a contenção com documentação posterior",
          "Comunicar regulação médica em TODA contenção física — médico regulador deve ser informado"
        ]}
      ]}},
      { id: "17.5", titulo: "Cuidado com o socorrista", conteudo: { tipo: "texto", intro: "Atendimentos de agitação psicomotora são física e emocionalmente exaustivos. O cuidado com a equipe é parte do protocolo.", blocos: [
        { tipo: "card-grid", cards: [
          { titulo: "Risco de lesão na equipe", subtitulo: "Prevenção ativa", texto: "Mordidas, socos, chutes e escarros são riscos reais. EPI (luvas, proteção ocular), número adequado de socorristas e técnica correta reduzem o risco." },
          { titulo: "Exposição a fluidos corporais", subtitulo: "Protocolo pós-exposição", texto: "Mordida ou contato com sangue/saliva: lavar imediatamente, comunicar ao serviço de saúde ocupacional, avaliar necessidade de profilaxia para HIV e hepatites." },
          { titulo: "Impacto emocional", subtitulo: "Normal e esperado", texto: "Atender vítima violenta, em crise psiquiátrica grave ou sob efeito de drogas é estressante. Debriefing pós-ocorrência é importante." },
          { titulo: "Nunca sozinho", subtitulo: "Regra de ouro", texto: "Nunca entrar sozinho em cena de agitação psicomotora. Se a equipe não é suficiente: aguardar reforço. A segurança do socorrista é inegociável." }
        ]},
        { tipo: "destaque", texto: "Socorrista que foi agredido fisicamente durante atendimento pode e deve registrar boletim de ocorrência. A agressão a profissional de saúde no exercício da função é crime no Brasil (Lei 9.983/2000)." }
      ]}}
    ]
  },

  {
    id: 18, titulo: "Animais Peçonhentos", icone: "🐍", status: "disponivel",
    topicos: [
      { id: "18.1", titulo: "Serpentes — reconhecimento e conduta", conteudo: { tipo: "texto", intro: "O Brasil é um dos países com maior diversidade de serpentes peçonhentas do mundo. O reconhecimento do gênero e a conduta correta no APH são fundamentais para reduzir complicações.", blocos: [
        { tipo: "card-grid", cards: [
          { titulo: "Bothrops (Jararaca)", subtitulo: "Gênero mais comum — 80% dos casos", texto: "Ação proteolítica, coagulante e hemorrágica. Dor e edema local intensos, bolhas, necrose, hemorragia sistêmica. Soro botrópico." },
          { titulo: "Crotalus (Cascavel)", subtitulo: "Maior letalidade no Brasil", texto: "Ação neurotóxica (fácies miastênica, ptose, diplopia) + miotóxica (urina escura) + coagulante. Soro crotálico." },
          { titulo: "Lachesis (Surucucu)", subtitulo: "Maior serpente peçonhenta das Américas", texto: "Ação similar ao Bothrops + efeito vagal (bradicardia, hipotensão, diarreia). Soro laquético ou botrópico-laquético." },
          { titulo: "Micrurus (Coral verdadeira)", subtitulo: "Rara, mas altamente neurotóxica", texto: "Paralisia muscular progressiva, apneia. Soro antielapídico. Sem manifestação local significativa." }
        ]},
        { tipo: "destaque", texto: "NÃO FAZER: torniquete, corte, sucção, gelo, calor, ingestão de álcool, comprimir o local. FAZER: imobilizar, tranquilizar, transportar para soroterapia." },
        { tipo: "lista", titulo: "Conduta APH — serpente:", itens: [
          "Garantir segurança da cena — afastar ou matar a serpente se possível (identificação ajuda no tratamento)",
          "Lavar o local com água e sabão suavemente",
          "Imobilizar o membro em posição funcional (abaixo do nível do coração)",
          "Retirar anéis, relógio, pulseiras (edema progressivo)",
          "Acesso venoso e monitorização se disponível",
          "Transporte imediato — soroterapia é o único tratamento eficaz"
        ]}
      ]}},
      { id: "18.2", titulo: "Escorpiões e aranhas", conteudo: { tipo: "texto", intro: "Escorpiões e aranhas são responsáveis por grande número de acidentes no Brasil, especialmente em zona urbana. A gravidade varia com a espécie, a quantidade de veneno e a idade da vítima.", blocos: [
        { tipo: "card-grid", cards: [
          { titulo: "Tityus serrulatus (Escorpião-amarelo)", subtitulo: "Espécie mais perigosa do Brasil", texto: "Dor local intensa, sudorese, taquicardia, vômitos, hipertensão. Em crianças: risco de edema pulmonar e choque. EMERGÊNCIA PEDIÁTRICA." },
          { titulo: "Loxosceles (Aranha-marrom)", subtitulo: "Loxoscelismo cutâneo e visceral", texto: "Lesão necrótica de evolução lenta (3–7 dias), halo eritematoso, dor moderada inicial. Forma visceral rara: hemólise grave." },
          { titulo: "Phoneutria (Aranha-armadeira)", subtitulo: "Veneno neurotóxico", texto: "Dor local intensa e imediata, sudorese, taquicardia, priapismo (em homens), agitação. Grave em crianças." },
          { titulo: "Latrodectus (Viúva-negra)", subtitulo: "Latrodectismo — dor irradiada", texto: "Dor local discreta mas dor muscular intensa e generalizada (cólicas), hipertensão, bradicardia. Soro específico se grave." }
        ]},
        { tipo: "destaque", texto: "Escorpionismo em criança pequena = EMERGÊNCIA. Toda criança picada por escorpião deve ser avaliada em serviço de saúde, independente dos sintomas iniciais." },
        { tipo: "lista", titulo: "Conduta geral para escorpiões/aranhas:", itens: [
          "Lavar o local com água e sabão",
          "Analgesia local com gelo (exceto aranha-marrom — pode piorar a necrose)",
          "NÃO espremer, incisar ou sugar o local",
          "Transportar ao serviço de saúde com o animal identificado se possível",
          "Em crianças: transporte imediato independente dos sintomas"
        ]}
      ]}},
      { id: "18.3", titulo: "Abelhas, vespas e outros insetos", conteudo: { tipo: "texto", intro: "Ferroadas de abelhas e vespas podem causar desde reação local até anafilaxia fatal. O número de ferroadas e a suscetibilidade individual determinam a gravidade.", blocos: [
        { tipo: "card-grid", cards: [
          { titulo: "Reação local simples", subtitulo: "1 a poucos ferrões", texto: "Dor, edema e eritema local. Remover o ferrão raspando (não pinçar). Gelo local. Analgésico se necessário." },
          { titulo: "Reação tóxica por múltiplas picadas", subtitulo: "Geralmente >10 ferrões", texto: "Vômito, diarreia, cefaleia, hipotensão, hemólise. Risco proporcional ao número de ferrões. Tratamento de suporte." },
          { titulo: "Reação alérgica grave / Anafilaxia", subtitulo: "Independe do número de ferrões", texto: "Urticária generalizada, angioedema, broncoespasmo, hipotensão. ADRENALINA IM imediata. Transporte urgente." },
          { titulo: "Abelhas africanizadas", subtitulo: "Comportamento defensivo agressivo", texto: "Atacam em enxame. Afastar a vítima da área sem movimentos bruscos. Não usar água para dispersar — piora o ataque." }
        ]},
        { tipo: "destaque", texto: "Retirar o ferrão por raspagem (cartão, unha) — NUNCA pinçar com pinça ou dedos, pois comprime a bolsa de veneno injetando mais toxina." }
      ]}},
      { id: "18.4", titulo: "Arraias, peixes e animais marinhos", conteudo: { tipo: "texto", intro: "Acidentes com animais aquáticos são frequentes em regiões litorâneas e de rios do Brasil. O veneno desses animais tem características específicas que orientam o tratamento.", blocos: [
        { tipo: "card-grid", cards: [
          { titulo: "Arraias de água doce (Potamotrygon)", subtitulo: "Acidente mais frequente no interior", texto: "Dor excruciante imediata, lesão lacerada pelo espinho, risco de infecção. Mergulhar o membro em água quente (42–45°C) por 30–90 min para inativar o veneno (termolábil)." },
          { titulo: "Baiacu (intoxicação por tetrodotoxina)", subtitulo: "Por consumo — não por contato", texto: "Paralisia progressiva, insuficiência respiratória. Sem antídoto. Suporte ventilatório e transporte urgente." },
          { titulo: "Água-viva e corais", subtitulo: "Cnidários", texto: "Dor em queimação local, eritema, urticária. Lavar com água do mar (não doce). Remover tentáculos com objeto (não com as mãos). Vinagre se disponível." },
          { titulo: "Ouriço-do-mar", subtitulo: "Espinhos quebram na pele", texto: "Dor local, infecção. Mergulhar em água quente. Não tentar retirar os espinhos no APH — risco de quebrar mais." }
        ]},
        { tipo: "destaque", texto: "Água QUENTE é o tratamento de escolha para venenos de peixes e arraias (termolábeis). Temperatura: 42–45°C. Tempo: 30 a 90 minutos. Cuidado para não queimar a pele." }
      ]}},
      { id: "18.5", titulo: "Plantas tóxicas e intoxicações naturais", conteudo: { tipo: "texto", intro: "Contato ou ingestão de plantas tóxicas pode causar desde irritação local até falência orgânica. O CIATOX (0800 722 6001) é o principal recurso de apoio.", blocos: [
        { tipo: "lista", titulo: "Plantas de maior risco no Brasil:", itens: [
          "Comigo-ninguém-pode (Dieffenbachia): cristais de oxalato causam queimação oral intensa, edema de língua, risco de OVACE",
          "Trombeteira/Zabumba (Datura): alcaloides anticolinérgicos — midríase, taquicardia, alucinações, hipertermia",
          "Cássia/Coronha: hepatotóxica — icterícia, falência hepática",
          "Mamona (Ricinus communis): ricina — uma das toxinas mais letais conhecidas",
          "Beladona: atropínicos — síndrome anticolinérgica clássica"
        ]},
        { tipo: "card-grid", cards: [
          { titulo: "Síndrome anticolinérgica", subtitulo: "Trombeteira, beladona", texto: "Taquicardia, pele seca e quente, midríase, retenção urinária, agitação, alucinações. 'Seco como um osso, vermelho como beterraba, louco como chapeleiro'." },
          { titulo: "Conduta geral", subtitulo: "Intoxicação por planta", texto: "Identificar a planta, acionar CIATOX, suporte clínico, transporte. Não induzir vômito sem orientação do toxicologista." }
        ]},
        { tipo: "destaque", texto: "CIATOX: 0800 722 6001 — disponível 24h, gratuito, orienta condutas em intoxicações exógenas incluindo plantas, medicamentos, produtos químicos e animais peçonhentos." }
      ]}}
    ]
  },

  {
    id: 19, titulo: "Tentativa de Autoextermínio", icone: "🆘", status: "disponivel",
    topicos: [
      { id: "19.1", titulo: "Abordagem inicial e segurança da cena", conteudo: { tipo: "texto", intro: "O atendimento pré-hospitalar a vítimas de tentativa de autoextermínio (TAE) exige equilíbrio entre a intervenção clínica urgente e a abordagem humanizada. A segurança é sempre o primeiro passo.", blocos: [
        { tipo: "destaque", texto: "Segurança PRIMEIRO: cenas de TAE podem conter riscos para a equipe — armas, substâncias, estruturas instáveis. Nunca entre em cena insegura." },
        { tipo: "lista", titulo: "Avaliação de segurança específica em TAE:", itens: [
          "Verificar presença de armas de fogo, facas ou outros objetos cortantes ainda acessíveis",
          "Em intoxicações por gás: nunca entre sem EPI adequado — risco de contaminação",
          "Em enforcamento: verificar estabilidade da estrutura antes de subir",
          "Em TAE por arma de fogo: aguardar liberação policial da cena se necessário",
          "Solicitar apoio policial se houver risco de agressão ou cena não controlada"
        ]},
        { tipo: "card-grid", cards: [
          { titulo: "Abordagem com a vítima consciente", subtitulo: "Voz calma, sem julgamento", texto: "Apresente-se. Diga que está ali para ajudar. Não questione a decisão. Ouça. Mantenha contato visual respeitoso." },
          { titulo: "Privacidade e dignidade", subtitulo: "Direito da vítima", texto: "Afastar curiosos. Cobrir a vítima se necessário. Não comentar a situação em voz alta na frente de terceiros." },
          { titulo: "Família e acompanhantes", subtitulo: "Atenção ao entorno", texto: "Familiares em estado de choque também precisam de acolhimento. Designar um socorrista para apoiá-los separadamente." },
          { titulo: "Sigilo profissional", subtitulo: "Ético e legal", texto: "Informações da ocorrência são compartilhadas apenas com a equipe de saúde receptora. Imprensa e curiosos: sem informações." }
        ]}
      ]}},
      { id: "19.2", titulo: "TAE por intoxicação exógena", conteudo: { tipo: "texto", intro: "A intoxicação medicamentosa ou por substâncias químicas é o método mais frequente de TAE no Brasil, especialmente entre mulheres. A conduta no APH é suporte e transporte rápido.", blocos: [
        { tipo: "lista", titulo: "Informações essenciais a coletar na cena:", itens: [
          "Que substância(s) foi/foram usadas? (guardar embalagens, blisters, frascos)",
          "Quantidade aproximada ingerida",
          "Horário estimado da ingestão",
          "Sintomas presentes no momento",
          "Uso associado de álcool",
          "Outras tentativas anteriores"
        ]},
        { tipo: "card-grid", cards: [
          { titulo: "NÃO induzir vômito", subtitulo: "Contraindicado na maioria dos casos", texto: "Risco de broncoaspiração, lesão química da mucosa esofágica e laríngea. Apenas se orientado pelo CIATOX ou regulação médica." },
          { titulo: "Carvão ativado", subtitulo: "Somente por orientação médica", texto: "Reduz absorção de algumas substâncias. Contraindicado em inconscientes, cáusticos e hidrocarbonetos. Administrar conforme protocolo." },
          { titulo: "Via aérea em prioridade", subtitulo: "Vítima com rebaixamento", texto: "Posição lateral de segurança. BVM se apneia. Aspiração de secreções. IOT se disponível e indicada." },
          { titulo: "Acionar CIATOX", subtitulo: "0800 722 6001", texto: "Orientação especializada 24h para qualquer intoxicação. Informar a substância e quantidade para conduta específica." }
        ]},
        { tipo: "destaque", texto: "Toda intoxicação em contexto de TAE é notificação compulsória no Brasil — ficha de notificação deve ser preenchida pelo serviço receptor." }
      ]}},
      { id: "19.3", titulo: "TAE por métodos físicos", conteudo: { tipo: "texto", intro: "Tentativas por enforcamento, ferimentos cortantes, precipitação e outros métodos físicos exigem condutas clínicas específicas combinadas à abordagem humanizada.", blocos: [
        { tipo: "card-grid", cards: [
          { titulo: "Enforcamento", subtitulo: "Conduta na cena", texto: "Sustentar o corpo, cortar o laço pelo lado (nunca pelo nó). Deitar com proteção cervical. Avaliar ABCDE. Possível lesão cervical, laríngea e hipóxia grave." },
          { titulo: "Ferimentos cortantes", subtitulo: "Corte de punho e outros", texto: "Controle de hemorragia com pressão direta. Curativo. Avaliação de estruturas nobres (tendões, vasos). Transporte. Não julgar, não questionar." },
          { titulo: "Precipitação (queda de altura)", subtitulo: "Politrauma grave", texto: "Abordagem como politraumatizado: XABCDE. Proteção cervical obrigatória. Alta energia — presuma lesões múltiplas mesmo sem sinais externos." },
          { titulo: "Afogamento intencional", subtitulo: "Resgate com segurança", texto: "Priorize a segurança do socorrista. Ventilações de resgate precoces. Proteção cervical apenas se mecanismo sugerir trauma. RCP se PCR." }
        ]},
        { tipo: "destaque", texto: "Em TODA TAE por método físico: tratar as lesões com a mesma competência técnica de qualquer trauma. A causa não muda a qualidade do cuidado prestado." }
      ]}},
      { id: "19.4", titulo: "Aspectos legais, éticos e notificação", conteudo: { tipo: "texto", intro: "O atendimento a vítimas de TAE envolve obrigações legais e éticas específicas que o socorrista deve conhecer.", blocos: [
        { tipo: "card-grid", cards: [
          { titulo: "Notificação compulsória", subtitulo: "Lei 13.819/2019 — Política Nacional de Prevenção do Suicídio", texto: "TAE é agravo de notificação compulsória. Serviço receptor preenche a ficha de notificação ao SINAN. APH deve fornecer todas as informações disponíveis." },
          { titulo: "Recusa de atendimento", subtitulo: "Vítima consciente", texto: "Adulto consciente tem direito de recusar atendimento. Documenta-se a recusa. Comunicar à regulação médica. Não abandonar — manter presença e diálogo." },
          { titulo: "Menor de idade", subtitulo: "ECA — proteção integral", texto: "Crianças e adolescentes têm proteção especial. Atendimento obrigatório. Notificação ao Conselho Tutelar. Comunicar ao responsável e à regulação." },
          { titulo: "Documentação", subtitulo: "Ficha de atendimento", texto: "Registrar horário de chegada, condições encontradas, substâncias identificadas, condutas realizadas e estado ao transferir. Sem julgamentos no registro." }
        ]},
        { tipo: "lista", titulo: "Rede de apoio — encaminhamento pós-APH:", itens: [
          "CVV — Centro de Valorização da Vida: 188 (24h, gratuito)",
          "CAPS — Centro de Atenção Psicossocial: referência para saúde mental no território",
          "UPA/PA: avaliação clínica e psiquiátrica de urgência",
          "Hospital geral com psiquiatria: casos de maior gravidade",
          "Conselho Tutelar: quando envolver criança ou adolescente"
        ]},
        { tipo: "destaque", texto: "O APH não termina com a entrega da vítima no hospital. A qualidade do registro e do relato verbal para a equipe receptora influencia diretamente o plano de cuidados da vítima." }
      ]}},
      { id: "19.5", titulo: "Cuidado com o cuidador — saúde do socorrista", conteudo: { tipo: "texto", intro: "Atendimentos de TAE e situações de morte violenta geram impacto emocional significativo na equipe. O cuidado com a saúde mental do socorrista é parte integrante do protocolo.", blocos: [
        { tipo: "card-grid", cards: [
          { titulo: "Estresse pós-traumático no socorrista", subtitulo: "É real e frequente", texto: "Pesadelos, flashbacks, irritabilidade, dificuldade de concentração. Até 30% dos profissionais de emergência desenvolvem TEPT ao longo da carreira." },
          { titulo: "Debriefing", subtitulo: "Conversa estruturada pós-ocorrência", texto: "Reunião da equipe para processar o ocorrido. Não é terapia — é suporte mútuo e identificação de quem precisa de apoio especializado." },
          { titulo: "Sinais de alerta", subtitulo: "Quando buscar ajuda", texto: "Sonhos recorrentes sobre atendimentos, evitar o trabalho, uso de álcool para 'desligar', choro frequente, isolamento social." },
          { titulo: "Onde buscar apoio", subtitulo: "Recursos disponíveis", texto: "Psicólogo do trabalho, CAPS, médico do trabalho, CVV (188). Falar é o primeiro passo — não existe fraqueza em pedir ajuda." }
        ]},
        { tipo: "destaque", texto: "Socorrista que cuida de si cuida melhor dos outros. Reconhecer seus próprios limites emocionais é um ato de profissionalismo, não de fraqueza." }
      ]}}
    ]
  }
];

function Bloco({ bloco }) {
  if (bloco.tipo === "destaque") return (
    <div style={{background:"#fff5f5",border:"2px solid #e53e3e",borderRadius:10,padding:"14px 18px",marginBottom:18,color:"#c53030",fontWeight:700,fontSize:13,lineHeight:1.6}}>{bloco.texto}</div>
  );
  if (bloco.tipo === "paragrafo") return (
    <p style={{color:"#4a5568",lineHeight:1.8,marginBottom:16,fontSize:14,margin:"0 0 16px 0"}}>{bloco.texto}</p>
  );
  if (bloco.tipo === "lista") return (
    <div style={{marginBottom:18}}>
      {bloco.titulo && <div style={{fontWeight:700,color:"#2d3748",marginBottom:10,fontSize:14}}>{bloco.titulo}</div>}
      {bloco.itens.map((item,j) => (
        <div key={j} style={{display:"flex",gap:10,alignItems:"flex-start",marginBottom:8}}>
          <span style={{width:7,height:7,background:"#e53e3e",borderRadius:"50%",marginTop:5,flexShrink:0,display:"inline-block"}}/>
          <span style={{color:"#4a5568",fontSize:13,lineHeight:1.6}}>{item}</span>
        </div>
      ))}
    </div>
  );
  if (bloco.tipo === "card-grid") return (
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:18}}>
      {bloco.cards.map((card,j) => (
        <div key={j} style={{background:"#f7fafc",border:"1px solid #e2e8f0",borderRadius:10,padding:"14px 16px",borderTop:"3px solid #e53e3e"}}>
          <div style={{fontWeight:800,color:"#1a202c",fontSize:12,marginBottom:2}}>{card.titulo}</div>
          <div style={{color:"#e53e3e",fontSize:11,fontWeight:700,marginBottom:7}}>{card.subtitulo}</div>
          <div style={{color:"#4a5568",fontSize:12,lineHeight:1.5}}>{card.texto}</div>
        </div>
      ))}
    </div>
  );
  if (bloco.tipo === "cadeia") return (
    <div style={{marginBottom:18}}>
      {bloco.elos.map((elo,j) => (
        <div key={j} style={{display:"flex",alignItems:"center",gap:12,marginBottom:10}}>
          <div style={{width:38,height:38,borderRadius:"50%",background:elo.cor,display:"flex",alignItems:"center",justifyContent:"center",fontSize:17,flexShrink:0}}>{elo.icone}</div>
          <div style={{flex:1,background:"#f7fafc",border:"1px solid #e2e8f0",borderRadius:8,padding:"8px 14px"}}>
            <div style={{fontWeight:700,color:"#1a202c",fontSize:13}}><span style={{color:elo.cor}}>{elo.titulo}</span></div>
            <div style={{color:"#718096",fontSize:12,marginTop:2}}>{elo.descricao}</div>
          </div>
        </div>
      ))}
    </div>
  );
  if (bloco.tipo === "equipe") return (
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:18}}>
      {bloco.membros.map((m,j) => (
        <div key={j} style={{background:"#f7fafc",border:"1px solid #e2e8f0",borderRadius:10,padding:"14px 16px",borderTop:`3px solid ${m.cor}`}}>
          <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10}}>
            <span style={{fontSize:20}}>{m.icone}</span>
            <span style={{fontWeight:800,color:"#1a202c",fontSize:13}}>{m.cargo}</span>
          </div>
          {m.responsabilidades.map((r,k) => (
            <div key={k} style={{display:"flex",gap:7,marginBottom:5}}>
              <span style={{color:m.cor,fontWeight:700,fontSize:12,flexShrink:0}}>→</span>
              <span style={{color:"#4a5568",fontSize:12,lineHeight:1.5}}>{r}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
  return null;
}

function Conteudo({ conteudo }) {
  if (conteudo.tipo === "timeline") return (
    <div>
      <p style={{color:"#4a5568",lineHeight:1.8,marginBottom:24,fontSize:14}}>{conteudo.intro}</p>
      <div style={{position:"relative",paddingLeft:26}}>
        <div style={{position:"absolute",left:8,top:0,bottom:0,width:2,background:"#fed7d7"}}/>
        {conteudo.eventos.map((ev,i) => (
          <div key={i} style={{marginBottom:20,position:"relative"}}>
            <div style={{position:"absolute",left:-26,top:4,width:18,height:18,background:"#e53e3e",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center"}}>
              <div style={{width:6,height:6,background:"#fff",borderRadius:"50%"}}/>
            </div>
            <div style={{background:"#fff5f5",border:"1px solid #fed7d7",borderRadius:10,padding:"12px 14px"}}>
              <div style={{color:"#e53e3e",fontWeight:800,fontSize:12,marginBottom:3}}>{ev.ano}</div>
              <div style={{color:"#1a202c",fontWeight:700,fontSize:13,marginBottom:5}}>{ev.titulo}</div>
              <div style={{color:"#4a5568",fontSize:13,lineHeight:1.6}}>{ev.descricao}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  return (
    <div>
      <p style={{color:"#4a5568",lineHeight:1.8,marginBottom:20,fontSize:14}}>{conteudo.intro}</p>
      {conteudo.blocos?.map((bloco,i) => <Bloco key={i} bloco={bloco}/>)}
    </div>
  );
}

function Avaliacao({ modId, onVoltar }) {
  const av = AVALIACOES[modId];
  const [respostas, setRespostas] = useState({});
  const [enviado, setEnviado] = useState(false);

  if (!av) return null;

  const total = av.questoes.length;
  const acertos = enviado ? av.questoes.filter(q => respostas[q.id] === q.correta).length : 0;
  const pct = enviado ? Math.round((acertos/total)*100) : 0;
  const apto = pct >= 60;

  const todasRespondidas = av.questoes.every(q => respostas[q.id] !== undefined);

  return (
    <div style={{maxWidth:720,margin:"0 auto"}}>
      <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:20}}>
        <button onClick={onVoltar} style={{background:"none",border:"1px solid #e2e8f0",borderRadius:8,padding:"6px 14px",cursor:"pointer",color:"#4a5568",fontSize:12,fontWeight:600}}>← Voltar ao conteúdo</button>
        <div>
          <div style={{color:"#e53e3e",fontSize:10,fontWeight:700,letterSpacing:1.5}}>AVALIAÇÃO DO MÓDULO</div>
          <div style={{color:"#1a202c",fontWeight:800,fontSize:16}}>{av.titulo}</div>
        </div>
      </div>

      {enviado && (
        <div style={{background: apto ? "#f0fff4" : "#fff5f5", border:`2px solid ${apto?"#38a169":"#e53e3e"}`, borderRadius:14,padding:"20px 24px",marginBottom:24,textAlign:"center"}}>
          <div style={{fontSize:36,marginBottom:8}}>{apto ? "🏆" : "📚"}</div>
          <div style={{fontSize:22,fontWeight:800,color: apto?"#276749":"#c53030",marginBottom:4}}>
            {acertos}/{total} acertos — {pct}%
          </div>
          <div style={{fontSize:16,fontWeight:700,color: apto?"#276749":"#c53030",marginBottom:8}}>
            {apto ? "✅ APROVADO — Apto para o próximo módulo!" : "❌ REPROVADO — Revise o conteúdo e tente novamente."}
          </div>
          <div style={{fontSize:13,color:"#718096"}}>Mínimo para aprovação: 60% ({Math.ceil(total*0.6)} questões)</div>
          {!apto && (
            <button onClick={() => { setRespostas({}); setEnviado(false); }} style={{marginTop:16,padding:"10px 24px",background:"#e53e3e",color:"#fff",border:"none",borderRadius:8,fontWeight:700,cursor:"pointer",fontSize:13}}>
              Refazer avaliação
            </button>
          )}
        </div>
      )}

      {av.questoes.map((q,qi) => {
        const respondida = respostas[q.id] !== undefined;
        const correta = q.correta;
        return (
          <div key={q.id} style={{background:"#fff",borderRadius:12,padding:"20px 22px",marginBottom:16,boxShadow:"0 1px 6px rgba(0,0,0,0.06)",borderLeft:`4px solid ${enviado ? (respostas[q.id]===correta?"#38a169":"#e53e3e") : (respondida?"#e53e3e":"#e2e8f0")}`}}>
            <div style={{fontWeight:700,color:"#1a202c",fontSize:14,marginBottom:12}}>
              <span style={{color:"#e53e3e",marginRight:6}}>{qi+1}.</span>{q.enunciado}
            </div>
            {q.opcoes.map((op,oi) => {
              let bg = "#f7fafc", border = "1px solid #e2e8f0", cor = "#4a5568", fw = 400;
              if (enviado) {
                if (oi === correta) { bg="#f0fff4"; border="2px solid #38a169"; cor="#276749"; fw=700; }
                else if (respostas[q.id] === oi && oi !== correta) { bg="#fff5f5"; border="2px solid #e53e3e"; cor="#c53030"; fw=700; }
              } else if (respostas[q.id] === oi) {
                bg="#fff5f5"; border="2px solid #e53e3e"; cor="#c53030"; fw=700;
              }
              return (
                <div key={oi}
                  onClick={() => !enviado && setRespostas(r => ({...r,[q.id]:oi}))}
                  style={{display:"flex",alignItems:"flex-start",gap:10,padding:"10px 14px",borderRadius:8,marginBottom:6,background:bg,border:border,cursor:enviado?"default":"pointer",transition:"all 0.15s"}}>
                  <div style={{width:22,height:22,borderRadius:"50%",background: enviado&&oi===correta?"#38a169": respostas[q.id]===oi?"#e53e3e":"#e2e8f0",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontSize:11,fontWeight:700,color: respostas[q.id]===oi||( enviado&&oi===correta)?"#fff":"#718096"}}>
                    {enviado && oi===correta?"✓": enviado&&respostas[q.id]===oi&&oi!==correta?"✗":String.fromCharCode(65+oi)}
                  </div>
                  <span style={{color:cor,fontSize:13,lineHeight:1.5,fontWeight:fw}}>{op}</span>
                </div>
              );
            })}
            {enviado && respostas[q.id] !== correta && (
              <div style={{marginTop:8,padding:"8px 12px",background:"#f0fff4",border:"1px solid #9ae6b4",borderRadius:8,color:"#276749",fontSize:12,fontWeight:600}}>
                ✓ Resposta correta: {q.opcoes[correta]}
              </div>
            )}
          </div>
        );
      })}

      {!enviado && (
        <div style={{textAlign:"center",marginTop:8,marginBottom:24}}>
          {!todasRespondidas && <div style={{color:"#718096",fontSize:12,marginBottom:12}}>Responda todas as {total} questões para enviar.</div>}
          <button onClick={() => todasRespondidas && setEnviado(true)}
            style={{padding:"12px 40px",borderRadius:8,border:"none",background:todasRespondidas?"#e53e3e":"#cbd5e0",color:"#fff",fontWeight:800,fontSize:14,cursor:todasRespondidas?"pointer":"not-allowed",boxShadow:todasRespondidas?"0 3px 10px rgba(229,62,62,0.3)":"none"}}>
            Enviar avaliação
          </button>
        </div>
      )}
    </div>
  );
}

const ADMIN_SENHA = "imetec2025";

// ─── TELA DE LOGIN ────────────────────────────────────────────────────────────
function Login({ onLogin, onAdmin }) {
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [loading, setLoading] = useState(false);
  const [adminSenha, setAdminSenha] = useState("");
  const [modoAdmin, setModoAdmin] = useState(false);

  const formatCpf = (v) => v.replace(/\D/g,"").slice(0,11).replace(/(\d{3})(\d)/,"$1.$2").replace(/(\d{3})(\d)/,"$1.$2").replace(/(\d{3})(\d{1,2})$/,"$1-$2");

  const handleLogin = async () => {
    const cpfLimpo = cpf.replace(/\D/g,"");
    if (cpfLimpo.length !== 11) { setErro("CPF inválido."); return; }
    if (!senha) { setErro("Digite sua senha."); return; }
    setLoading(true); setErro("");
    try {
      const res = await window.storage.get(`aluno:${cpfLimpo}`);
      if (!res) { setErro("CPF não cadastrado. Fale com o professor."); setLoading(false); return; }
      const aluno = JSON.parse(res.value);
      if (aluno.senha !== senha) { setErro("Senha incorreta."); setLoading(false); return; }
      onLogin(aluno, cpfLimpo);
    } catch { setErro("Erro ao buscar dados. Tente novamente."); }
    setLoading(false);
  };

  const handleAdmin = () => {
    if (adminSenha === ADMIN_SENHA) { onAdmin(); }
    else { setErro("Senha de professor incorreta."); }
  };

  return (
    <div style={{position:"fixed",inset:0,background:"linear-gradient(135deg,#1a1f2e 0%,#2d3748 100%)",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Segoe UI',system-ui,sans-serif",padding:20}}>
      <div style={{maxWidth:400,width:"100%"}}>
        <div style={{textAlign:"center",marginBottom:32}}>
          <div style={{fontSize:52,marginBottom:8}}>🚑</div>
          <div style={{color:"#e53e3e",fontSize:10,fontWeight:700,letterSpacing:3,marginBottom:4}}>CURSO DE</div>
          <div style={{color:"#fff",fontSize:22,fontWeight:900,marginBottom:2}}>ATENDIMENTO PRÉ-HOSPITALAR</div>
          <div style={{color:"#718096",fontSize:12}}>IMETEC — Instituto Miracemense de Educação Tecnológica</div>
        </div>

        {!modoAdmin ? (
          <div style={{background:"rgba(255,255,255,0.05)",borderRadius:16,padding:"28px 24px",border:"1px solid rgba(255,255,255,0.08)"}}>
            <div style={{color:"#a0aec0",fontSize:12,fontWeight:700,marginBottom:6,letterSpacing:1}}>CPF</div>
            <input value={cpf} onChange={e => setCpf(formatCpf(e.target.value))} placeholder="000.000.000-00"
              style={{width:"100%",padding:"12px 14px",borderRadius:8,border:"1px solid #2d3748",background:"#1a1f2e",color:"#fff",fontSize:15,marginBottom:16,boxSizing:"border-box",outline:"none"}}/>
            <div style={{color:"#a0aec0",fontSize:12,fontWeight:700,marginBottom:6,letterSpacing:1}}>SENHA</div>
            <input type="password" value={senha} onChange={e => setSenha(e.target.value)} placeholder="Sua senha"
              onKeyDown={e => e.key==="Enter" && handleLogin()}
              style={{width:"100%",padding:"12px 14px",borderRadius:8,border:"1px solid #2d3748",background:"#1a1f2e",color:"#fff",fontSize:15,marginBottom:20,boxSizing:"border-box",outline:"none"}}/>
            {erro && <div style={{color:"#fc8181",fontSize:12,marginBottom:14,textAlign:"center"}}>{erro}</div>}
            <button onClick={handleLogin} disabled={loading}
              style={{width:"100%",padding:"13px",borderRadius:8,border:"none",background:"#e53e3e",color:"#fff",fontWeight:800,fontSize:14,cursor:"pointer",marginBottom:16}}>
              {loading ? "Entrando..." : "Entrar no Curso"}
            </button>
            <div style={{textAlign:"center"}}>
              <span onClick={() => {setModoAdmin(true);setErro("");}} style={{color:"#4a5568",fontSize:11,cursor:"pointer",textDecoration:"underline"}}>Acesso do professor</span>
            </div>
          </div>
        ) : (
          <div style={{background:"rgba(255,255,255,0.05)",borderRadius:16,padding:"28px 24px",border:"1px solid rgba(255,255,255,0.08)"}}>
            <div style={{color:"#68d391",fontWeight:800,fontSize:14,marginBottom:16,textAlign:"center"}}>🎓 Acesso do Professor</div>
            <div style={{color:"#a0aec0",fontSize:12,fontWeight:700,marginBottom:6,letterSpacing:1}}>SENHA DO PROFESSOR</div>
            <input type="password" value={adminSenha} onChange={e => setAdminSenha(e.target.value)} placeholder="Senha do professor"
              onKeyDown={e => e.key==="Enter" && handleAdmin()}
              style={{width:"100%",padding:"12px 14px",borderRadius:8,border:"1px solid #2d3748",background:"#1a1f2e",color:"#fff",fontSize:15,marginBottom:20,boxSizing:"border-box",outline:"none"}}/>
            {erro && <div style={{color:"#fc8181",fontSize:12,marginBottom:14,textAlign:"center"}}>{erro}</div>}
            <button onClick={handleAdmin}
              style={{width:"100%",padding:"13px",borderRadius:8,border:"none",background:"#38a169",color:"#fff",fontWeight:800,fontSize:14,cursor:"pointer",marginBottom:12}}>
              Entrar como Professor
            </button>
            <div style={{textAlign:"center"}}>
              <span onClick={() => {setModoAdmin(false);setErro("");}} style={{color:"#4a5568",fontSize:11,cursor:"pointer",textDecoration:"underline"}}>← Voltar ao login do aluno</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── PAINEL DO PROFESSOR ──────────────────────────────────────────────────────
function PainelProfessor({ onSair }) {
  const [alunos, setAlunos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [novoNome, setNovoNome] = useState("");
  const [novoCpf, setNovoCpf] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [msg, setMsg] = useState("");
  const [alunoSel, setAlunoSel] = useState(null);

  const formatCpf = (v) => v.replace(/\D/g,"").slice(0,11).replace(/(\d{3})(\d)/,"$1.$2").replace(/(\d{3})(\d)/,"$1.$2").replace(/(\d{3})(\d{1,2})$/,"$1-$2");

  const carregar = async () => {
    setLoading(true);
    try {
      const lista = await window.storage.list("aluno:");
      const dados = await Promise.all(lista.keys.map(async k => {
        try { const r = await window.storage.get(k); return r ? JSON.parse(r.value) : null; } catch { return null; }
      }));
      setAlunos(dados.filter(Boolean));
    } catch { setAlunos([]); }
    setLoading(false);
  };

  useState(() => { carregar(); }, []);

  const cadastrar = async () => {
    const cpfLimpo = novoCpf.replace(/\D/g,"");
    if (!novoNome || cpfLimpo.length !== 11 || !novaSenha) { setMsg("Preencha todos os campos."); return; }
    const aluno = { cpf: cpfLimpo, nome: novoNome, senha: novaSenha, modulosLiberados: [1] };
    await window.storage.set(`aluno:${cpfLimpo}`, JSON.stringify(aluno));
    setMsg(`✅ ${novoNome} cadastrado!`);
    setNovoNome(""); setNovoCpf(""); setNovaSenha("");
    carregar();
  };

  const liberarModulo = async (cpf, modId) => {
    try {
      const res = await window.storage.get(`aluno:${cpf}`);
      if (!res) return;
      const aluno = JSON.parse(res.value);
      if (!aluno.modulosLiberados.includes(modId)) {
        aluno.modulosLiberados = [...aluno.modulosLiberados, modId].sort((a,b)=>a-b);
        await window.storage.set(`aluno:${cpf}`, JSON.stringify(aluno));
        setAlunos(prev => prev.map(a => a.cpf === cpf ? aluno : a));
        if (alunoSel?.cpf === cpf) setAlunoSel(aluno);
        setMsg(`✅ Módulo ${modId} liberado para ${aluno.nome}!`);
      }
    } catch { setMsg("Erro ao liberar módulo."); }
  };

  const bloquearModulo = async (cpf, modId) => {
    if (modId === 1) { setMsg("O Módulo 1 não pode ser bloqueado."); return; }
    try {
      const res = await window.storage.get(`aluno:${cpf}`);
      if (!res) return;
      const aluno = JSON.parse(res.value);
      aluno.modulosLiberados = aluno.modulosLiberados.filter(m => m !== modId);
      await window.storage.set(`aluno:${cpf}`, JSON.stringify(aluno));
      setAlunos(prev => prev.map(a => a.cpf === cpf ? aluno : a));
      if (alunoSel?.cpf === cpf) setAlunoSel(aluno);
      setMsg(`🔒 Módulo ${modId} bloqueado para ${aluno.nome}.`);
    } catch {}
  };

  const excluirAluno = async (cpf, nome) => {
    if (!window.confirm(`Excluir aluno ${nome}?`)) return;
    await window.storage.delete(`aluno:${cpf}`);
    setAlunoSel(null);
    carregar();
  };

  return (
    <div style={{position:"fixed",inset:0,background:"#f0f4f8",fontFamily:"'Segoe UI',system-ui,sans-serif",overflowY:"auto"}}>
      {/* Header */}
      <div style={{background:"#1a1f2e",padding:"14px 24px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          <span style={{fontSize:20}}>🎓</span>
          <div>
            <div style={{color:"#fff",fontWeight:800,fontSize:14}}>PAINEL DO PROFESSOR</div>
            <div style={{color:"#718096",fontSize:10}}>IMETEC · Curso APH</div>
          </div>
        </div>
        <button onClick={onSair} style={{background:"rgba(255,255,255,0.08)",border:"1px solid #2d3748",borderRadius:6,padding:"6px 14px",color:"#a0aec0",fontSize:12,cursor:"pointer"}}>Sair</button>
      </div>

      <div style={{maxWidth:860,margin:"0 auto",padding:"24px 16px"}}>
        {msg && <div style={{background:"#f0fff4",border:"1px solid #9ae6b4",borderRadius:8,padding:"10px 16px",marginBottom:16,color:"#276749",fontSize:13,fontWeight:600}}>{msg}</div>}

        {/* Cadastrar aluno */}
        <div style={{background:"#fff",borderRadius:14,padding:"20px 22px",marginBottom:20,boxShadow:"0 1px 6px rgba(0,0,0,0.06)"}}>
          <div style={{fontWeight:800,color:"#1a202c",fontSize:14,marginBottom:14}}>➕ Cadastrar Novo Aluno</div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr auto",gap:10,alignItems:"end"}}>
            <div>
              <div style={{color:"#718096",fontSize:11,fontWeight:600,marginBottom:4}}>NOME</div>
              <input value={novoNome} onChange={e=>setNovoNome(e.target.value)} placeholder="Nome completo"
                style={{width:"100%",padding:"9px 12px",borderRadius:7,border:"1px solid #e2e8f0",fontSize:13,boxSizing:"border-box"}}/>
            </div>
            <div>
              <div style={{color:"#718096",fontSize:11,fontWeight:600,marginBottom:4}}>CPF</div>
              <input value={novoCpf} onChange={e=>setNovoCpf(formatCpf(e.target.value))} placeholder="000.000.000-00"
                style={{width:"100%",padding:"9px 12px",borderRadius:7,border:"1px solid #e2e8f0",fontSize:13,boxSizing:"border-box"}}/>
            </div>
            <div>
              <div style={{color:"#718096",fontSize:11,fontWeight:600,marginBottom:4}}>SENHA</div>
              <input value={novaSenha} onChange={e=>setNovaSenha(e.target.value)} placeholder="Senha do aluno"
                style={{width:"100%",padding:"9px 12px",borderRadius:7,border:"1px solid #e2e8f0",fontSize:13,boxSizing:"border-box"}}/>
            </div>
            <button onClick={cadastrar}
              style={{padding:"9px 18px",borderRadius:7,border:"none",background:"#e53e3e",color:"#fff",fontWeight:700,fontSize:13,cursor:"pointer",whiteSpace:"nowrap"}}>
              Cadastrar
            </button>
          </div>
        </div>

        <div style={{display:"grid",gridTemplateColumns:"1fr 1.6fr",gap:16}}>
          {/* Lista de alunos */}
          <div style={{background:"#fff",borderRadius:14,padding:"20px 22px",boxShadow:"0 1px 6px rgba(0,0,0,0.06)"}}>
            <div style={{fontWeight:800,color:"#1a202c",fontSize:14,marginBottom:14}}>👥 Alunos Cadastrados ({alunos.length})</div>
            {loading ? <div style={{color:"#718096",fontSize:13}}>Carregando...</div> :
              alunos.length === 0 ? <div style={{color:"#718096",fontSize:13}}>Nenhum aluno cadastrado ainda.</div> :
              alunos.map(a => (
                <div key={a.cpf} onClick={() => setAlunoSel(a)}
                  style={{padding:"10px 12px",borderRadius:8,marginBottom:6,cursor:"pointer",background:alunoSel?.cpf===a.cpf?"#fff5f5":"#f7fafc",border:`1px solid ${alunoSel?.cpf===a.cpf?"#fc8181":"#e2e8f0"}`}}>
                  <div style={{fontWeight:700,color:"#1a202c",fontSize:13}}>{a.nome}</div>
                  <div style={{color:"#718096",fontSize:11,marginTop:2}}>CPF: {a.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,"$1.$2.$3-$4")} · {a.modulosLiberados.length} módulo(s) liberado(s)</div>
                </div>
              ))
            }
          </div>

          {/* Módulos do aluno selecionado */}
          <div style={{background:"#fff",borderRadius:14,padding:"20px 22px",boxShadow:"0 1px 6px rgba(0,0,0,0.06)"}}>
            {!alunoSel ? (
              <div style={{color:"#a0aec0",fontSize:13,textAlign:"center",paddingTop:40}}>← Selecione um aluno para gerenciar os módulos</div>
            ) : (
              <>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}}>
                  <div>
                    <div style={{fontWeight:800,color:"#1a202c",fontSize:14}}>{alunoSel.nome}</div>
                    <div style={{color:"#718096",fontSize:11}}>{alunoSel.modulosLiberados.length}/{MODULOS.length} módulos liberados</div>
                  </div>
                  <button onClick={() => excluirAluno(alunoSel.cpf, alunoSel.nome)}
                    style={{padding:"5px 12px",borderRadius:6,border:"1px solid #fed7d7",background:"#fff5f5",color:"#e53e3e",fontSize:11,cursor:"pointer",fontWeight:600}}>
                    Excluir aluno
                  </button>
                </div>
                <div style={{maxHeight:400,overflowY:"auto"}}>
                  {MODULOS.map(mod => {
                    const liberado = alunoSel.modulosLiberados.includes(mod.id);
                    return (
                      <div key={mod.id} style={{display:"flex",alignItems:"center",gap:10,padding:"8px 10px",borderRadius:8,marginBottom:5,background:liberado?"#f0fff4":"#f7fafc",border:`1px solid ${liberado?"#9ae6b4":"#e2e8f0"}`}}>
                        <span style={{fontSize:14}}>{mod.icone}</span>
                        <div style={{flex:1,minWidth:0}}>
                          <div style={{fontSize:11,fontWeight:700,color:"#1a202c",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>Mod. {mod.id} — {mod.titulo}</div>
                        </div>
                        {liberado ? (
                          <button onClick={() => bloquearModulo(alunoSel.cpf, mod.id)}
                            style={{padding:"4px 10px",borderRadius:5,border:"1px solid #9ae6b4",background:"#f0fff4",color:"#276749",fontSize:10,cursor:"pointer",fontWeight:700,flexShrink:0}}>
                            ✓ Liberto
                          </button>
                        ) : (
                          <button onClick={() => liberarModulo(alunoSel.cpf, mod.id)}
                            style={{padding:"4px 10px",borderRadius:5,border:"1px solid #e2e8f0",background:"#fff",color:"#718096",fontSize:10,cursor:"pointer",fontWeight:700,flexShrink:0}}>
                            🔒 Liberar
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── TELA DE APRESENTAÇÃO DO CURSO ───────────────────────────────────────────
function Apresentacao({ onEntrar }) {
  const [secao, setSecao] = useState(0);

  const secoes = [
    {
      id: 0, label: "O Curso", icone: "🚑",
      conteudo: () => (
        <div>
          <div style={{fontSize:56,marginBottom:16,textAlign:"center"}}>🚑</div>
          <h2 style={{color:"#fff",fontWeight:900,fontSize:22,margin:"0 0 8px",textAlign:"center"}}>Atendimento Pré-Hospitalar</h2>
          <p style={{color:"#a0aec0",fontSize:13,textAlign:"center",marginBottom:28,lineHeight:1.6}}>Formação Técnica em Emergências · IMETEC</p>

          <p style={{color:"#e2e8f0",fontSize:14,lineHeight:1.8,marginBottom:20}}>
            O Atendimento Pré-Hospitalar (APH) é o conjunto de ações realizadas fora do ambiente hospitalar com o objetivo de salvar vidas, estabilizar vítimas e garantir um transporte seguro até o serviço de saúde. Este curso foi desenvolvido para capacitar profissionais e estudantes da área da saúde com o conhecimento técnico necessário para atuar com segurança e eficiência em situações de emergência.
          </p>

          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:20}}>
            {[
              {icone:"📚",label:"19 Módulos",sub:"Do básico ao avançado"},
              {icone:"📝",label:"190 Questões",sub:"10 por módulo"},
              {icone:"✅",label:"60% p/ aprovação",sub:"Por módulo"},
              {icone:"🎯",label:"Teórico + Prático",sub:"Sala e campo"},
            ].map((c,i) => (
              <div key={i} style={{background:"rgba(255,255,255,0.06)",borderRadius:10,padding:"14px 16px",display:"flex",alignItems:"center",gap:12}}>
                <span style={{fontSize:22}}>{c.icone}</span>
                <div>
                  <div style={{color:"#fff",fontWeight:800,fontSize:13}}>{c.label}</div>
                  <div style={{color:"#718096",fontSize:11}}>{c.sub}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{background:"rgba(229,62,62,0.1)",border:"1px solid rgba(229,62,62,0.25)",borderRadius:10,padding:"14px 16px"}}>
            <div style={{color:"#fc8181",fontWeight:700,fontSize:12,marginBottom:4}}>📌 COMO FUNCIONA</div>
            <div style={{color:"#a0aec0",fontSize:13,lineHeight:1.7}}>
              Cada módulo combina <strong style={{color:"#e2e8f0"}}>aula teórica nesta plataforma</strong> com <strong style={{color:"#e2e8f0"}}>aula prática presencial</strong> em sala e em campo. Os módulos são liberados progressivamente pelo professor após a conclusão de cada etapa prática.
            </div>
          </div>
        </div>
      )
    },
    {
      id: 1, label: "Para quem é", icone: "👥",
      conteudo: () => (
        <div>
          <div style={{fontSize:44,marginBottom:12,textAlign:"center"}}>👥</div>
          <h2 style={{color:"#fff",fontWeight:900,fontSize:20,margin:"0 0 12px",textAlign:"center"}}>Para quem é este curso?</h2>

          <div style={{background:"rgba(229,62,62,0.1)",border:"1px solid rgba(229,62,62,0.25)",borderRadius:10,padding:"14px 16px",marginBottom:18}}>
            <div style={{color:"#fc8181",fontWeight:700,fontSize:12,marginBottom:6}}>❓ PRECISO SER DA ÁREA DA SAÚDE?</div>
            <div style={{color:"#e2e8f0",fontSize:13,lineHeight:1.8}}>
              Não. O curso de APH é aberto ao público geral. O único requisito é ser maior de 18 anos e ter, preferencialmente, o ensino médio completo. Muitos alunos começam aqui a sua primeira experiência profissional na área de emergências.
            </div>
          </div>

          <div style={{marginBottom:16}}>
            {[
              {icone:"🧑‍⚕️", titulo:"Estudantes e profissionais da saúde", desc:"Técnicos de enfermagem, auxiliares, agentes comunitários e estudantes que desejam ampliar sua atuação para o ambiente pré-hospitalar."},
              {icone:"🚒", titulo:"Primeiros respondentes", desc:"Bombeiros civis, seguranças, policiais, salva-vidas e guardas municipais que precisam de capacitação técnica em emergências."},
              {icone:"🤝", titulo:"Voluntários e cuidadores", desc:"Pessoas que atuam em ações humanitárias, eventos de grande porte, missões voluntárias ou cuidado domiciliar de pessoas dependentes."},
              {icone:"🆕", titulo:"Quem quer iniciar na área", desc:"Quem ainda não trabalha na saúde mas quer construir uma carreira no atendimento de urgências, salvamento ou transporte de pacientes."},
            ].map((item,i) => (
              <div key={i} style={{display:"flex",gap:14,alignItems:"flex-start",marginBottom:10,background:"rgba(255,255,255,0.04)",borderRadius:10,padding:"12px 14px"}}>
                <span style={{fontSize:22,flexShrink:0}}>{item.icone}</span>
                <div>
                  <div style={{color:"#fff",fontWeight:700,fontSize:13,marginBottom:3}}>{item.titulo}</div>
                  <div style={{color:"#a0aec0",fontSize:12,lineHeight:1.6}}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{background:"rgba(56,161,105,0.1)",border:"1px solid rgba(56,161,105,0.25)",borderRadius:10,padding:"14px 16px"}}>
            <div style={{color:"#68d391",fontWeight:700,fontSize:12,marginBottom:4}}>✅ PRÉ-REQUISITO</div>
            <div style={{color:"#a0aec0",fontSize:13,lineHeight:1.7}}>Maior de 18 anos e ensino médio completo (preferencialmente). O conteúdo foi estruturado do básico ao avançado — você não precisa de experiência prévia para começar.</div>
          </div>
        </div>
      )
    },
    {
      id: 2, label: "Conteúdo", icone: "📋",
      conteudo: () => (
        <div>
          <div style={{fontSize:44,marginBottom:12,textAlign:"center"}}>📋</div>
          <h2 style={{color:"#fff",fontWeight:900,fontSize:20,margin:"0 0 20px",textAlign:"center"}}>O que você vai aprender</h2>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
            {MODULOS.map(mod => (
              <div key={mod.id} style={{display:"flex",alignItems:"center",gap:8,background:"rgba(255,255,255,0.04)",borderRadius:8,padding:"8px 12px"}}>
                <span style={{fontSize:14,flexShrink:0}}>{mod.icone}</span>
                <div style={{minWidth:0}}>
                  <div style={{color:"#718096",fontSize:9,fontWeight:700}}>MOD. {mod.id}</div>
                  <div style={{color:"#e2e8f0",fontSize:11,fontWeight:600,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{mod.titulo}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 3, label: "Metodologia", icone: "🎓",
      conteudo: () => (
        <div>
          <div style={{fontSize:44,marginBottom:12,textAlign:"center"}}>🎓</div>
          <h2 style={{color:"#fff",fontWeight:900,fontSize:20,margin:"0 0 20px",textAlign:"center"}}>Como aprendemos juntos</h2>

          <div style={{marginBottom:16}}>
            {[
              {num:"01",cor:"#e53e3e",titulo:"Aula Teórica na Plataforma",desc:"Cada módulo tem tópicos sequenciais com conteúdo completo, fundamentado nas diretrizes mais atuais (AHA 2025, PHTLS, protocolos brasileiros). Você avança no seu ritmo e faz a avaliação ao final."},
              {num:"02",cor:"#d69e2e",titulo:"Aula Presencial em Sala",desc:"O professor aprofunda os conteúdos com discussões de casos clínicos, vídeos e simulações teóricas. Momento de tirar dúvidas e consolidar o aprendizado."},
              {num:"03",cor:"#38a169",titulo:"Treinamento Prático em Campo",desc:"Simulações realistas com manequins, equipamentos de APH e cenários de emergência. O aluno pratica cada habilidade com feedback direto do instrutor."},
              {num:"04",cor:"#3182ce",titulo:"Liberação Progressiva",desc:"Após a conclusão da prática, o professor libera o próximo módulo na plataforma. Isso garante que teoria e prática caminhem sempre juntas."},
            ].map((item,i) => (
              <div key={i} style={{display:"flex",gap:14,alignItems:"flex-start",marginBottom:14}}>
                <div style={{width:32,height:32,borderRadius:"50%",background:item.cor,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontWeight:800,fontSize:12,color:"#fff"}}>{item.num}</div>
                <div style={{background:"rgba(255,255,255,0.04)",borderRadius:10,padding:"12px 14px",flex:1}}>
                  <div style={{color:"#fff",fontWeight:700,fontSize:13,marginBottom:4}}>{item.titulo}</div>
                  <div style={{color:"#a0aec0",fontSize:12,lineHeight:1.6}}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
  ];

  const Sec = secoes[secao];

  return (
    <div style={{position:"fixed",inset:0,background:"#1a1f2e",display:"flex",flexDirection:"column",fontFamily:"'Segoe UI',system-ui,sans-serif"}}>
      {/* Header fixo */}
      <div style={{background:"rgba(0,0,0,0.3)",padding:"12px 20px",display:"flex",alignItems:"center",justifyContent:"space-between",flexShrink:0,borderBottom:"1px solid #2d3748"}}>
        <div style={{display:"flex",alignItems:"center",gap:8}}>
          <span style={{fontSize:18}}>🚑</span>
          <div>
            <div style={{color:"#fff",fontWeight:800,fontSize:12}}>CURSO APH</div>
            <div style={{color:"#e53e3e",fontSize:9,fontWeight:700,letterSpacing:1.5}}>IMETEC · APH</div>
          </div>
        </div>
        <button onClick={onEntrar} style={{padding:"7px 16px",borderRadius:7,border:"none",background:"#e53e3e",color:"#fff",fontWeight:700,fontSize:12,cursor:"pointer"}}>
          Começar →
        </button>
      </div>

      {/* Tabs */}
      <div style={{display:"flex",borderBottom:"1px solid #2d3748",flexShrink:0,background:"rgba(0,0,0,0.2)"}}>
        {secoes.map((s,i) => (
          <div key={s.id} onClick={() => setSecao(i)}
            style={{flex:1,padding:"10px 4px",textAlign:"center",cursor:"pointer",borderBottom:secao===i?"2px solid #e53e3e":"2px solid transparent",transition:"all 0.2s"}}>
            <div style={{fontSize:14,marginBottom:2}}>{s.icone}</div>
            <div style={{color:secao===i?"#fc8181":"#718096",fontSize:10,fontWeight:700}}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Conteúdo com scroll */}
      <div style={{flex:1,overflowY:"auto",padding:"24px 20px"}}>
        <div style={{maxWidth:640,margin:"0 auto"}}>
          <Sec.conteudo />
        </div>
      </div>

      {/* Footer com navegação */}
      <div style={{padding:"14px 20px",borderTop:"1px solid #2d3748",display:"flex",justifyContent:"space-between",alignItems:"center",flexShrink:0,background:"rgba(0,0,0,0.2)"}}>
        <button onClick={() => setSecao(s => Math.max(0, s-1))} disabled={secao===0}
          style={{padding:"8px 18px",borderRadius:7,border:"1px solid #2d3748",background:"none",color:"#718096",fontSize:12,cursor:secao===0?"not-allowed":"pointer",opacity:secao===0?0.3:1}}>
          ← Anterior
        </button>
        <div style={{display:"flex",gap:6}}>
          {secoes.map((_,i) => (
            <div key={i} onClick={() => setSecao(i)} style={{width:7,height:7,borderRadius:"50%",background:secao===i?"#e53e3e":"#2d3748",cursor:"pointer",transition:"background 0.2s"}}/>
          ))}
        </div>
        {secao < secoes.length - 1 ? (
          <button onClick={() => setSecao(s => s+1)}
            style={{padding:"8px 18px",borderRadius:7,border:"none",background:"#e53e3e",color:"#fff",fontWeight:700,fontSize:12,cursor:"pointer"}}>
            Próximo →
          </button>
        ) : (
          <button onClick={onEntrar}
            style={{padding:"8px 18px",borderRadius:7,border:"none",background:"#38a169",color:"#fff",fontWeight:800,fontSize:12,cursor:"pointer"}}>
            Entrar no Curso ✓
          </button>
        )}
      </div>
    </div>
  );
}

// ─── APP PRINCIPAL ────────────────────────────────────────────────────────────
export default function App() {
  const [tela, setTela] = useState("apresentacao");
  const [alunoLogado, setAlunoLogado] = useState(null);
  const [cpfLogado, setCpfLogado] = useState("");
  const [moduloAtivo, setModuloAtivo] = useState(1);
  const [topicoAtivo, setTopicoAtivo] = useState("1.1");
  const [concluidos, setConcluidos] = useState(new Set());
  const [sidebarAberta, setSidebarAberta] = useState(true);
  const [expandido, setExpandido] = useState(1);
  const [verAvaliacao, setVerAvaliacao] = useState(false);

  const handleLogin = (aluno, cpf) => {
    setAlunoLogado(aluno);
    setCpfLogado(cpf);
    setModuloAtivo(aluno.modulosLiberados[0] || 1);
    setTopicoAtivo(`${aluno.modulosLiberados[0] || 1}.1`);
    setTela("curso");
  };

  const handleSair = () => {
    setAlunoLogado(null); setCpfLogado("");
    setConcluidos(new Set()); setTela("login");
  };

  if (tela === "apresentacao") return <Apresentacao onEntrar={() => setTela("curso")} />;
  if (tela === "login") return <Login onLogin={handleLogin} onAdmin={() => setTela("admin")} />;
  if (tela === "admin") return <PainelProfessor onSair={() => setTela("login")} />;

  const modulosLiberados = alunoLogado ? alunoLogado.modulosLiberados : MODULOS.map(m => m.id);
  const modAtual = MODULOS.find(m => m.id === moduloAtivo);
  const topAtual = modAtual?.topicos.find(t => t.id === topicoAtivo);
  const totalTopicosLiberados = MODULOS.filter(m => modulosLiberados.includes(m.id)).reduce((a,m) => a + m.topicos.length, 0);
  const tops = modAtual?.topicos || [];
  const idxAtual = tops.findIndex(t => t.id === topicoAtivo);
  const isConcluido = concluidos.has(topicoAtivo);
  const pct = totalTopicosLiberados > 0 ? Math.round((concluidos.size / totalTopicosLiberados) * 100) : 0;
  const todosTopicosDoModuloConcluidos = tops.length > 0 && tops.every(t => concluidos.has(t.id));

  const handleConcluir = () => {
    const novo = new Set(concluidos);
    novo.add(topicoAtivo);
    setConcluidos(novo);
    if (idxAtual < tops.length - 1) setTopicoAtivo(tops[idxAtual+1].id);
  };

  const handleSelectTopico = (modId, topId) => {
    setModuloAtivo(modId); setTopicoAtivo(topId); setVerAvaliacao(false);
  };

  return (
    <div style={{position:"fixed",top:0,left:0,right:0,bottom:0,display:"flex",fontFamily:"'Segoe UI',system-ui,sans-serif",background:"#f0f4f8",overflow:"hidden"}}>

      {/* SIDEBAR */}
      {sidebarAberta && (
        <div style={{width:252,flexShrink:0,background:"#1a1f2e",display:"flex",flexDirection:"column",overflow:"hidden"}}>
          <div style={{padding:"14px 14px 10px",borderBottom:"1px solid #2d3748"}}>
            <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}>
              <span style={{fontSize:20}}>🚑</span>
              <div>
                <div style={{color:"#fff",fontWeight:800,fontSize:12}}>CURSO APH</div>
                <div style={{color:"#e53e3e",fontSize:9,fontWeight:700,letterSpacing:1.5}}>ATENDIMENTO PRÉ-HOSPITALAR</div>
              </div>
            </div>
            <div style={{background:"rgba(255,255,255,0.05)",borderRadius:7,padding:"7px 10px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <div>
                <div style={{color:"#fff",fontSize:11,fontWeight:700}}>{alunoLogado?.nome?.split(" ")[0]}</div>
                <div style={{color:"#718096",fontSize:9}}>{cpfLogado.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,"$1.$2.$3-$4")}</div>
              </div>
              <button onClick={handleSair} style={{background:"none",border:"1px solid #2d3748",borderRadius:5,padding:"3px 8px",color:"#718096",fontSize:9,cursor:"pointer"}}>Sair</button>
            </div>
          </div>
          <div style={{padding:"10px 14px",borderBottom:"1px solid #2d3748"}}>
            <div style={{color:"#718096",fontSize:10,marginBottom:5,fontWeight:600,letterSpacing:1}}>PROGRESSO</div>
            <div style={{display:"flex",justifyContent:"space-between",fontSize:10,color:"#718096",marginBottom:4}}>
              <span>{concluidos.size}/{totalTopicosLiberados} tópicos</span><span>{pct}%</span>
            </div>
            <div style={{background:"#2d3748",borderRadius:3,height:4}}>
              <div style={{background:"#e53e3e",width:`${pct}%`,height:"100%",borderRadius:3,transition:"width 0.4s"}}/>
            </div>
          </div>
          <div style={{flex:1,overflowY:"auto"}}>
            {MODULOS.map(mod => {
              const liberado = modulosLiberados.includes(mod.id);
              const isAtivo = mod.id === moduloAtivo;
              const isExp = expandido === mod.id;
              return (
                <div key={mod.id}>
                  <div onClick={() => { if(!liberado) return; setExpandido(isExp?null:mod.id); setModuloAtivo(mod.id); setVerAvaliacao(false); if(mod.topicos.length>0) setTopicoAtivo(mod.topicos[0].id); }}
                    style={{padding:"8px 14px",cursor:liberado?"pointer":"not-allowed",display:"flex",alignItems:"center",gap:8,background:isAtivo?"rgba(229,62,62,0.12)":"transparent",borderLeft:isAtivo?"3px solid #e53e3e":"3px solid transparent",opacity:liberado?1:0.4}}>
                    <span style={{fontSize:14}}>{mod.icone}</span>
                    <div style={{flex:1,minWidth:0}}>
                      <div style={{color:"#718096",fontSize:10,fontWeight:600}}>MOD. {mod.id}</div>
                      <div style={{color:"#e2e8f0",fontSize:11,fontWeight:700,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{mod.titulo}</div>
                    </div>
                    {liberado ? <span style={{color:"#718096",fontSize:9}}>{isExp?"▲":"▼"}</span> : <span style={{fontSize:11}}>🔒</span>}
                  </div>
                  {isExp && liberado && (
                    <div style={{background:"rgba(0,0,0,0.15)"}}>
                      {mod.topicos.map(top => {
                        const isTopAtivo = topicoAtivo===top.id && !verAvaliacao;
                        const feito = concluidos.has(top.id);
                        return (
                          <div key={top.id} onClick={() => handleSelectTopico(mod.id, top.id)}
                            style={{padding:"6px 12px 6px 38px",cursor:"pointer",background:isTopAtivo?"rgba(229,62,62,0.15)":"transparent",borderLeft:isTopAtivo?"3px solid #fc8181":"3px solid transparent",display:"flex",alignItems:"center",gap:6}}>
                            <div style={{width:13,height:13,borderRadius:"50%",background:feito?"#38a169":isTopAtivo?"#e53e3e":"#2d3748",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                              {feito && <span style={{color:"#fff",fontSize:8,fontWeight:700}}>✓</span>}
                            </div>
                            <span style={{color:isTopAtivo?"#fc8181":"#718096",fontSize:11,fontWeight:isTopAtivo?700:400,lineHeight:1.3}}>{top.titulo}</span>
                          </div>
                        );
                      })}
                      <div onClick={() => { setModuloAtivo(mod.id); setVerAvaliacao(true); }}
                        style={{padding:"6px 12px 6px 38px",cursor:"pointer",background:verAvaliacao&&moduloAtivo===mod.id?"rgba(56,161,105,0.2)":"transparent",borderLeft:verAvaliacao&&moduloAtivo===mod.id?"3px solid #38a169":"3px solid transparent",display:"flex",alignItems:"center",gap:6}}>
                        <span style={{fontSize:11}}>📝</span>
                        <span style={{color:verAvaliacao&&moduloAtivo===mod.id?"#68d391":"#718096",fontSize:11,fontWeight:verAvaliacao&&moduloAtivo===mod.id?700:400}}>Avaliação do módulo</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div style={{padding:"8px 14px",borderTop:"1px solid #2d3748",color:"#4a5568",fontSize:9,textAlign:"center"}}>IMETEC</div>
        </div>
      )}

      {/* ÁREA PRINCIPAL */}
      <div style={{flex:1,display:"flex",flexDirection:"column",overflow:"hidden",minWidth:0}}>
        <div style={{background:"#fff",borderBottom:"1px solid #e2e8f0",padding:"10px 20px",display:"flex",alignItems:"center",gap:12,flexShrink:0}}>
          <button onClick={() => setSidebarAberta(!sidebarAberta)} style={{background:"none",border:"1px solid #e2e8f0",borderRadius:6,padding:"5px 9px",cursor:"pointer",color:"#4a5568",fontSize:13,flexShrink:0}}>☰</button>
          <div style={{flex:1,minWidth:0}}>
            <div style={{color:"#e53e3e",fontSize:10,fontWeight:700,letterSpacing:1.5,marginBottom:1}}>MÓDULO {moduloAtivo} · {modAtual?.titulo?.toUpperCase()}</div>
            <div style={{color:"#1a202c",fontWeight:800,fontSize:16,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{verAvaliacao ? "📝 Avaliação do Módulo" : topAtual?.titulo}</div>
          </div>
          {!verAvaliacao && (
            <div style={{display:"flex",gap:5,flexShrink:0}}>
              {tops.map((t,i) => (
                <div key={t.id} onClick={() => setTopicoAtivo(t.id)} title={t.titulo}
                  style={{width:24,height:24,borderRadius:"50%",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,fontWeight:700,background:concluidos.has(t.id)?"#e53e3e":t.id===topicoAtivo?"#fff5f5":"#f7fafc",border:t.id===topicoAtivo?"2px solid #e53e3e":"2px solid #e2e8f0",color:concluidos.has(t.id)?"#fff":t.id===topicoAtivo?"#e53e3e":"#a0aec0"}}>
                  {concluidos.has(t.id)?"✓":i+1}
                </div>
              ))}
              <div onClick={() => setVerAvaliacao(true)} title="Avaliação do módulo"
                style={{width:24,height:24,borderRadius:"50%",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,background:"#f7fafc",border:"2px solid #e2e8f0"}}>
                📝
              </div>
            </div>
          )}
        </div>

        <div style={{flex:1,overflowY:"auto",padding:"20px"}}>
          {verAvaliacao ? (
            <Avaliacao modId={moduloAtivo} onVoltar={() => setVerAvaliacao(false)} />
          ) : topAtual && (
            <div style={{maxWidth:720,margin:"0 auto"}}>
              <div style={{display:"flex",gap:8,marginBottom:16}}>
                <span style={{background:"#fff5f5",border:"1px solid #fed7d7",borderRadius:20,padding:"3px 12px",color:"#e53e3e",fontWeight:700,fontSize:11}}>Tópico {topicoAtivo}</span>
                {isConcluido && <span style={{background:"#f0fff4",border:"1px solid #9ae6b4",borderRadius:20,padding:"3px 12px",color:"#276749",fontWeight:700,fontSize:11}}>✓ Concluído</span>}
              </div>
              <div style={{background:"#fff",borderRadius:14,padding:"24px 26px",boxShadow:"0 1px 8px rgba(0,0,0,0.07)",marginBottom:16}}>
                <Conteudo conteudo={topAtual.conteudo}/>
              </div>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:10}}>
                <button onClick={() => idxAtual>0 && setTopicoAtivo(tops[idxAtual-1].id)} disabled={idxAtual===0}
                  style={{padding:"9px 20px",borderRadius:8,border:"1px solid #e2e8f0",background:"#fff",color:"#4a5568",fontWeight:600,fontSize:12,cursor:idxAtual===0?"not-allowed":"pointer",opacity:idxAtual===0?0.4:1}}>
                  ← Anterior
                </button>
                <div style={{display:"flex",gap:10}}>
                  {todosTopicosDoModuloConcluidos && (
                    <button onClick={() => setVerAvaliacao(true)}
                      style={{padding:"10px 20px",borderRadius:8,border:"2px solid #38a169",background:"#f0fff4",color:"#276749",fontWeight:800,fontSize:13,cursor:"pointer"}}>
                      📝 Fazer avaliação
                    </button>
                  )}
                  <button onClick={handleConcluir}
                    style={{padding:"10px 26px",borderRadius:8,border:"none",background:isConcluido?"#38a169":"#e53e3e",color:"#fff",fontWeight:800,fontSize:13,cursor:"pointer",boxShadow:"0 3px 10px rgba(229,62,62,0.25)"}}>
                    {isConcluido ? (idxAtual<tops.length-1?"Próximo →":"✓ Ver avaliação") : (idxAtual<tops.length-1?"Concluir e avançar →":"✓ Finalizar conteúdo")}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
