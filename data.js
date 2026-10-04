/* Todos os dados do quiz. Edite aqui perguntas e Stands (veja o README). */
/* Cada alternativa: [texto, arquétipo principal (+2), secundário (+1)] */
const QUESTIONS = [
 {q:"Você encontra uma porta misteriosa no meio de um lugar desconhecido. O que faz?",o:[
  ["Entro imediatamente.","EXP","REB"],["Observo tudo ao redor antes de decidir.","EST","SOB"],
  ["Procuro alguém para entrar comigo.","PRO","MAN"],["Tento descobrir primeiro por que aquela porta está ali.","VIS","CAO"]]},
 {q:"O plano do seu grupo desmorona no meio de um projeto importante.",o:[
  ["Improviso algo totalmente novo na hora.","CAO","SOB"],["Assumo o controle e refaço o plano do zero.","EST","PRO"],
  ["Convenço todos de que minha ideia é o novo caminho.","MAN","VIS"],["Sigo em frente. Nada vai me parar.","REB","EXP"]]},
 {q:"Alguém do seu grupo está sendo tratado injustamente.",o:[
  ["Confronto quem fez isso, agora.","REB","PRO"],["Fico ao lado da pessoa e a protejo.","PRO","SOB"],
  ["Junto provas e movo as peças com cuidado.","MAN","EST"],["Crio algo que mude a situação por completo.","VIS","CAO"]]},
 {q:"Uma competição com um prêmio enorme. Qual é sua abordagem?",o:[
  ["Estudo cada rival antes da largada.","EST","MAN"],["Aposto tudo numa jogada ousada.","REB","CAO"],
  ["Avanço passo a passo até o fim, custe o que custar.","SOB","PRO"],["Quero fazer algo que ninguém jamais fez.","VIS","EXP"]]},
 {q:"Noite de chuva, cidade desconhecida, sem celular e sem plano.",o:[
  ["Saio andando para ver o que encontro.","EXP","CAO"],["Acho abrigo e poupo energia até amanhecer.","SOB","EST"],
  ["Puxo conversa com os moradores e peço ajuda.","MAN","PRO"],["Imagino a cidade de cima e deduzo onde ficam as coisas.","VIS","EXP"]]},
 {q:"Aparece um atalho proibido que resolveria tudo.",o:[
  ["Pego. Regra é sugestão.","REB","CAO"],["Calculo custos e riscos antes.","EST","MAN"],
  ["Só pego se isso proteger quem importa.","PRO","SOB"],["Procuro um terceiro caminho que ninguém viu.","EXP","VIS"]]},
 {q:"Seu melhor amigo confessa um segredo perigoso.",o:[
  ["Guardo comigo e carrego esse peso.","PRO","SOB"],["Uso a informação com muito cuidado.","MAN","EST"],
  ["Falo: vamos agir juntos, agora!","REB","EXP"],["Vejo ali a chance de mudar tudo.","VIS","CAO"]]},
 {q:"O tempo está acabando e a pressão é enorme.",o:[
  ["Silêncio e foco total.","EST","SOB"],["Adrenalina! Funciono melhor assim.","REB","EXP"],
  ["Divido tarefas e coordeno todo mundo.","MAN","PRO"],["Deixo as ideias fluírem sem filtro.","CAO","VIS"]]},
 {q:"Daqui a cinco anos, o que representaria sucesso?",o:[
  ["Liderar algo grande que eu mesmo criei.","VIS","MAN"],["Ter liberdade para ir aonde eu quiser.","EXP","REB"],
  ["Ter pessoas seguras ao meu redor.","PRO","SOB"],["Dominar minha área melhor que qualquer um.","EST","CAO"]]},
 {q:"Você sofre uma derrota humilhante diante de todos.",o:[
  ["Volto mais forte para provar meu valor.","REB","SOB"],["Analiso cada erro até entender tudo.","EST","VIS"],
  ["Dou risada, me reinvento e começo outra coisa.","CAO","EXP"],["Me apoio nas pessoas que confiam em mim.","PRO","MAN"]]}
];

/* Níveis: A=5, B=4, C=3, D=2, E=1. Ordem dos atributos: Poder, Velocidade, Alcance, Durabilidade, Precisão, Potencial */
const STANDS = {
 EST:{type:"O Estrategista",user:"Lucian Marek",stand:"Silent Ledger",
  power:"Registra os padrões do inimigo em páginas invisíveis e passa a antecipá-los.",
  how:"Silent Ledger anota cada ataque que vê. Na terceira repetição de um padrão, as páginas se fecham sobre ele: o Stand bloqueia o golpe antes de ele acontecer, e o inimigo sente que luta contra o próprio reflexo.",
  why:"Você observa antes de agir e transforma caos em padrão. Seu Stand é essa paciência fria tomando forma.",
  strengths:["Neutraliza adversários previsíveis","Excelente em lutas longas","Raramente é pego de surpresa"],
  weak:"Um inimigo verdadeiramente aleatório não deixa padrões para anotar.",
  quote:"Eu já li o seu próximo movimento.",st:"CBCBAB"},
 REB:{type:"O Rebelde",user:"Dante Rook",stand:"Scarlet Static",
  power:"Transforma todo dano recebido em energia cinética para o próximo golpe.",
  how:"Cada pancada que o usuário sofre acumula estática vermelha pelo corpo do Stand. Quando a carga transborda, ela é liberada num único soco, mais forte quanto mais castigo foi aguentado.",
  why:"Você não recua diante de pressão, você usa a pressão. Seu Stand faz da teimosia uma arma.",
  strengths:["Poder devastador","Cresce durante a luta","Impossível de intimidar"],
  weak:"Precisa ser atingido para ficar forte, e um golpe fatal ainda é fatal.",
  quote:"Pode bater. Eu estou carregando.",st:"ACDBDC"},
 PRO:{type:"O Protetor",user:"Helena Quill",stand:"Amber Sanctuary",
  power:"Cria cápsulas de âmbar que congelam o dano sofrido por quem está dentro.",
  how:"O Stand cobre aliados com âmbar quente. Todo ferimento fica suspenso lá dentro, e só é cobrado do usuário depois, aos poucos. O santuário dura enquanto o usuário quiser proteger.",
  why:"Você coloca quem ama na frente. Seu Stand é um abraço que absorve o mundo.",
  strengths:["Defesa excepcional de aliados","Ótimo em resgates","Estabiliza qualquer equipe"],
  weak:"A dívida do dano vence mais tarde, e ele pode chegar todo de uma vez.",
  quote:"Ninguém cai enquanto eu estiver de pé.",st:"CDBACD"},
 EXP:{type:"O Explorador",user:"Marlowe Dune",stand:"Dust Cartographer",
  power:"Ao tocar o chão, desenha um mapa vivo do lugar, com trilhas e armadilhas ocultas.",
  how:"O Stand espalha poeira dourada que revela passagens secretas, mecanismos escondidos e rotas de fuga. Também caminha à frente como batedor e relata o que encontra.",
  why:"Você tem fome de horizonte e confia na curiosidade. Seu Stand transforma o desconhecido em caminho.",
  strengths:["Nunca se perde","Detecta armadilhas","Ótimo para fugir e reposicionar"],
  weak:"Longe do usuário, o Stand fica frágil e qualquer arranhão vira dor real.",
  quote:"Todo lugar tem uma saída. Eu só preciso pisar.",st:"DBABCA"},
 MAN:{type:"O Manipulador",user:"Selene Ashby",stand:"Sugar Marionette",
  power:"Liga fios doces à mente do alvo e faz com que ele acredite na última frase dita.",
  how:"Quando o usuário fala, o Stand prende um fio ao alvo. Por dez segundos, o alvo toma a última afirmação como verdade absoluta, e o Stand nunca toca em ninguém.",
  why:"Você entende as pessoas e sabe o que dizer e quando. Seu Stand é essa conversa transformada em arma.",
  strengths:["Vence sem lutar","Ótimo contra grupos","Alcance longo"],
  weak:"Emoção verdadeira e intensa, como medo real, rompe o fio na hora.",
  quote:"Eu só disse a verdade que você queria ouvir.",st:"EDACBB"},
 VIS:{type:"O Visionário",user:"Orion Vale",stand:"Solar Draft",
  power:"Desenha projetos no ar que se materializam dez segundos depois.",
  how:"O Stand traça plantas luminosas: pontes, escudos, armadilhas. Passados dez segundos, o desenho vira matéria. Quanto mais nítida a ideia, mais forte o resultado.",
  why:"Você enxerga o que ainda não existe. Seu Stand dá corpo à imaginação.",
  strengths:["Soluções para qualquer cenário","Criatividade sem teto","Potencial quase ilimitado"],
  weak:"Dúvida desfaz o desenho, e há sempre dez segundos de espera.",
  quote:"Se eu consigo imaginar, vai existir.",st:"BDBDCA"},
 SOB:{type:"O Sobrevivente",user:"Nico Brandt",stand:"Iron Lullaby",
  power:"Guarda dano e cansaço no próprio corpo e os desfaz quando o usuário está prestes a cair.",
  how:"Iron Lullaby canta baixinho enquanto absorve a exaustão. No limite, o Stand rebobina o corpo do usuário para o estado de cinco segundos antes e o devolve inteiro à luta.",
  why:"Você aguenta mais do que parece e sempre levanta. Seu Stand é essa teimosia silenciosa.",
  strengths:["Resistência absurda","Segunda chance garantida","Calmo sob pressão"],
  weak:"O retorno só funciona uma vez por dia. Gaste mal e acabou.",
  quote:"Ainda não terminou. Nunca termina.",st:"CCDACB"},
 CAO:{type:"O Caótico Criativo",user:"Zuri Flux",stand:"Confetti Requiem",
  power:"Cada toque dá a um objeto uma propriedade aleatória por um minuto.",
  how:"O Stand estoura em confetes que grudam nas coisas. Uma parede fica escorregadia, uma pedra flutua, uma espada fica quente demais para segurar. Ninguém controla a escolha, nem o usuário.",
  why:"Você improvisa melhor do que planeja. Seu Stand é o caos que você domina por instinto.",
  strengths:["Imprevisível até para o inimigo","Cria vantagens do nada","Cada luta é única"],
  weak:"Os efeitos aleatórios também podem virar contra o próprio usuário.",
  quote:"Eu não tenho um plano. Isso é o plano.",st:"BBCCEA"}
};
const GRADES = {A:5,B:4,C:3,D:2,E:1};
const STAT_NAMES = ["Poder","Velocidade","Alcance","Durabilidade","Precisão","Potencial de desenvolvimento"];
