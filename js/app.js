// PORTAFOLIO PROFESIONAL - ING. ALEJANDRO BARROETA (UMAD)
// LÓGICA DE INTERACTIVIDAD, LIGHTBOX Y LAB DE ALGORITMOS

document.addEventListener('DOMContentLoaded', () => {
  // 1. Datos de Algoritmos C# y Diagramas de Flujo
  const algorithmsData = [
  {
    "number": 1,
    "title": "DIAGRAMA 1. SENTENCIAS CON IF",
    "name": "SENTENCIAS CON IF",
    "description": "Hacer un algoritmo que muestre en pantalla si una persona es mayor o menor de acuerdo a la edad introducida.",
    "code": "using\nSystem;\nusing\nSystem.Collections.Generic;\nusing\nSystem.Linq;\nusing\nSystem.Text;\nusing\nSystem.Threading.Tasks;\nnamespace ConsoleApplication3\nclass Program\nstatic void Main(string[] args)\n//Muestra la edad de una persona\n//Declaración de variables\nint edad;\nstring leer;\nConsole.WriteLine(\"Dame la edad\");\nleer = Console.ReadLine();\nedad = Convert.ToInt16(leer);\nif (edad >= 18 &amp; edad <= 120)\nConsole.WriteLine(\"Eres mayor\");\nelse\nif (edad >= 0 &amp; edad <= 17)\nConsole.WriteLine(\"Eres menor\");\nelse\nConsole.WriteLine(\"Error\");\nConsole.ReadKey();\n} // main",
    "image": "assets/images/076a58_58a96a51a5e747658a888ca70766187d_mv2.png"
  },
  {
    "number": 2,
    "title": "DIAGRAMA 2. CALIFICACIÓN",
    "name": "CALIFICACIÓN",
    "description": "Hacer un algoritmo que solicite la calificación de informática; el algoritmo mostrará si el alumno aprobó, reprobó o es una calificación inválida.",
    "code": "namespace ConsoleApplication3\nclass Program\nstatic void Main(string[] args)\n//Muestra si la calificación ingresada es aprobatoria, reprobatoria o inválida\ndouble calif;\nstring leer;\nConsole.WriteLine(\"Introduce tu calificación\");\nleer = Console.ReadLine();\ncalif = Convert.ToDouble(leer);\nif (calif >= 7 &amp; calif <= 10)\nConsole.WriteLine(\"Calificación aprobatoria\");\nelse\nif (calif >= 0 &amp; calif >= 6.9)\nConsole.WriteLine(\"Calificación reprobatoria\");\nelse\nConsole.WriteLine(\"Calificación inválida\");\nConsole.ReadKey();",
    "image": "assets/images/076a58_5497daf9423140cb8ecf8cee222473ad_mv2.png"
  },
  {
    "number": 3,
    "title": "DIAGRAMA 3. SEMÁFORO",
    "name": "SEMÁFORO",
    "description": "Hacer un algoritmo que muestre la acción a realizar dependiendo del color de un semáforo.",
    "code": "namespace ConsoleApplication5\nclass Program\nstatic void Main(string[] args)\nstring color;\nConsole.WriteLine(\"Introduce el color del semáforo\");\ncolor = Console.ReadLine();\ncolor = color.ToLower();\nif (color == \"amarillo\" || color == \"rojo\")\nConsole.WriteLine(\"Detente\");\nelse\nif (color == \"verde\")\nConsole.WriteLine(\"Avanza\");\nelse\nConsole.WriteLine(\"Color inválido\");\nConsole.ReadKey();",
    "image": "assets/images/076a58_2d7353f163ab445e99368649c6cb4066_mv2.png"
  },
  {
    "number": 4,
    "title": "DIAGRAMA 4. NIVEL ACADÉMICO",
    "name": "NIVEL ACADÉMICO",
    "description": "Hacer un algoritmo que pida la edad de un estudiante, de acuerdo a su nivel académico mostrará si pertenece a kínder, primaria, secundaria, bachillerato o universidad.",
    "code": "namespace ConsoleApplication6\nclass Program\nstatic void Main(string[] args)\nint edad;\nstring leer;\nConsole.WriteLine(\"Introduce tu edad\");\nleer=Console.ReadLine();\nedad = Convert.ToInt16(leer);\nif (edad >= 2 &amp; edad <= 5)\nConsole.WriteLine(\"Tu nivel es kinder\");\nelse\nif (edad >= 5 &amp; edad <= 12)\nConsole.WriteLine(\"Tu nivel es primaria\");\nelse\nif (edad >= 13 &amp; edad <= 15)\nConsole.WriteLine(\"Tu nivel es secundaria\");\nelse\nif (edad >= 16 &amp; edad <= 19)\nConsole.WriteLine(\"Tu nivel es preparatoria\");\nelse\nif (edad >= 19 &amp; edad <= 90)\nConsole.WriteLine(\"Tu nivel es universidad\");\nelse\nConsole.WriteLine(\"Edad inválida\");\nConsole.ReadKey();",
    "image": "assets/images/076a58_56ec44d0ce8241efb6f176536f1631af_mv2.png"
  },
  {
    "number": 5,
    "title": "DIAGRAMA 5. ÁREA Y PERÍMETRO",
    "name": "ÁREA Y PERÍMETRO",
    "description": "Hacer un algoritmo que muestre el siguiente menú:\n1.-Cuadrado 2.-Rectángulo 3.-Triángulo 4.- Salir\nDe acuerdo a la opción elegida se solicitarán los datos correspondientes para mostrar el área y perímetro que corresponde.",
    "code": "namespace ConsoleApplication7\nclass Program\nstatic void Main(string[] args)\nint lado,baes,altura,opcion;\nstring leer;\nConsole.WriteLine(\"MENÚ \\n 1.-Cuadrado 2.-Triángulo 3.- Rectángulo 4.-Adiós \");\nleer=Console.ReadLine();\nopcion = Convert.ToInt16(leer);\nif (opcion == 1)\nConsole.WriteLine(\"Introduce el lado del cuadrado\");\nleer = Console.ReadLine();\nlado = Convert.ToInt16(leer);\nConsole.WriteLine(\"El área del cuadrado es {0} y el perímetro es {1}\", (lado * lado), (4 * lado));\nelse\nif (opcion == 2 || opcion == 3)\nConsole.WriteLine(\"Introduce la base\");\nleer = Console.ReadLine();\nbaes = Convert.ToInt16(leer);\nConsole.WriteLine(\"Introduce la altura\");\nleer = Console.ReadLine();\naltura = Convert.ToInt16(leer);\nif (opcion == 2)\nConsole.WriteLine(\"El área del rectángulo es {0} y el perímetro es {1}\", baes * altura, (altura * 2) + (baes * 2));\nelse\nConsole.WriteLine(\"El área del triángulo es {0} y el perímetro es {1}\", (baes * altura) / 2, baes + baes + baes);\nelse\nif (opcion == 4)\nConsole.WriteLine(\"Adiós\");\nConsole.ReadKey();",
    "image": "assets/images/076a58_64bc5114d37e4737963fab5a9e0d1701_mv2.png"
  },
  {
    "number": 6,
    "title": "DIAGRAMA 6. EJERCICIO #4 EN SWITCH",
    "name": "EJERCICIO #4 EN SWITCH",
    "description": "Convertir el ejercicio #4 en switch",
    "code": "namespace ConsoleApplication6\nclass Program\nstatic void Main(string[] args)\nint edad;\nstring leer;\nConsole.WriteLine(\"Introduce tu edad\");\nleer=Console.ReadLine();\nedad = Convert.ToInt16(leer);\nif (edad >= 2 &amp; edad <= 5)\nConsole.WriteLine(\"Tu nivel es kinder\");\nelse\nif (edad >= 5 &amp; edad <= 12)\nConsole.WriteLine(\"Tu nivel es primaria\");\nelse\nif (edad >= 13 &amp; edad <= 15)\nConsole.WriteLine(\"Tu nivel es secundaria\");\nelse\nif (edad >= 16 &amp; edad <= 19)\nConsole.WriteLine(\"Tu nivel es preparatoria\");\nelse\nif (edad >= 19 &amp; edad <= 90)\nConsole.WriteLine(\"Tu nivel es universidad\");\nelse\nConsole.WriteLine(\"Edad inválida\");\nConsole.ReadKey();",
    "image": "assets/images/076a58_8311e5fc5a9548a4b7ad1b06f872aeca_mv2.png"
  },
  {
    "number": 7,
    "title": "DIAGRAMA 7. EJERCICIO #1 EN SWITCH",
    "name": "EJERCICIO #1 EN SWITCH",
    "description": "Convertir el ejercicio #1 en switch",
    "code": "using System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Text;\nusing System.Threading.Tasks;\nnamespace ConsoleApplication3\nclass Program\nstatic void Main(string[] args)\n//Muestra la edad de una persona\n//Declaración de variables\nint edad;\nstring leer;\nConsole.WriteLine(\"Dame la edad\");\nleer = Console.ReadLine();\nedad = Convert.ToInt16(leer);\nif (edad >= 18 &amp; edad <= 120)\nConsole.WriteLine(\"Eres mayor\");\nelse\nif (edad >= 0 &amp; edad <= 17)\nConsole.WriteLine(\"Eres menor\");\nelse\nConsole.WriteLine(\"Error\");\nConsole.ReadKey();\n} // main",
    "image": "assets/images/076a58_a6a674dbe41b4625aa84851ae436e9f9_mv2.png"
  },
  {
    "number": 8,
    "title": "DIAGRAMA 8. EJERCICIO #2 EN SWITCH",
    "name": "EJERCICIO #2 EN SWITCH",
    "description": "Convertir el ejercicio #2 en switch",
    "code": "namespace ConsoleApplication3\nclass Program\nstatic void Main(string[] args)\n//Muestra la edad de una persona\n//Declaración de variables\nint edad;\nstring leer;\nConsole.WriteLine(\"Dame la edad\");\nleer = Console.ReadLine();\nedad = Convert.ToInt16(leer);\nif (edad >= 18 &amp; edad <= 120)\nConsole.WriteLine(\"Eres mayor\");\nelse\nif (edad >= 0 &amp; edad <= 17)\nConsole.WriteLine(\"Eres menor\");\nelse\nConsole.WriteLine(\"Error\");\nConsole.ReadKey();\n} // main",
    "image": "assets/images/076a58_21500dc465de4449b323fe926ec83ef4_mv2.png"
  },
  {
    "number": 9,
    "title": "DIAGRAMA 9. EJERCICIO #3 EN SWITCH",
    "name": "EJERCICIO #3 EN SWITCH",
    "description": "Convertir el ejercicio #3 en switch",
    "code": "namespace ConsoleApplication9\nclass Program\nstatic void Main(string[] args)\n//Encuentra la acción dependiendo del color\nstring color;\nConsole.WriteLine(\"Introduce el color del semáforo\");\ncolor=Console.ReadLine();\ncolor=color.ToLower();\nswitch (color)\ncase \"rojo\":\nConsole.WriteLine(\"Detente\");\nbreak;\ncase \"amarillo\":\nConsole.WriteLine(\"Detente\");\nbreak;\ncase\"verde\":\nConsole.WriteLine(\"Avanza\");\nbreak;\ndefault:\nConsole.WriteLine(\"Color inválido\");\nbreak;\nConsole.ReadKey();",
    "image": "assets/images/076a58_e2c10f1165314026a85f37374f2feab8_mv2.png"
  },
  {
    "number": 10,
    "title": "DIAGRAMA #10 ÁREA Y PERÍMETRO",
    "name": "ÁREA Y PERÍMETRO",
    "description": "Hacer un algoritmo que muestre el área y el perímetro de un triángulo, cuadrado o rectángulo.",
    "code": "namespace ConsoleApplication10\nclass Program\nstatic void Main(string[] args)\n//Muestra el área y el perímetro de un triángulo, rectángulo o un cuadrado\nint lado, bas, altura, opcion;\nstring leer;\nConsole.WriteLine(\"MENÚ \\n 1.-Cuadrado 2.-Rectángulo 3.-Triángulo 4.-Salir\");\nleer = Console.ReadLine();\nopcion = Convert.ToInt16(leer);\nswitch (opcion)\ncase 1:\nConsole.WriteLine(\"Introduce el lado del cuadrado\");\nleer = Console.ReadLine();\nlado = Convert.ToInt16(leer);\nConsole.WriteLine(\"El área del cuadrado es {0} y el perímetro es {1}\", lado * lado, 4 * lado);\nbreak;\ncase 2:\nConsole.WriteLine(\"Introduce la base\");\nleer = Console.ReadLine();\nbas = Convert.ToInt16(leer);\nConsole.WriteLine(\"Introduce la altura\");\nleer = Console.ReadLine();\naltura = Convert.ToInt16(leer);\nConsole.WriteLine(\"El área del rectángulo es {0} y el perímetro es {1}\", bas * altura, 2 * bas + 2 * altura);\nbreak;\ncase 3:\nConsole.WriteLine(\"Introduce la base\");\nleer = Console.ReadLine();\nbas = Convert.ToInt16(leer);\nConsole.WriteLine(\"Introduce la altura\");\nleer = Console.ReadLine();\naltura = Convert.ToInt16(leer);\nConsole.WriteLine(\"El área del triángulo es {0} y el perímetro es {1}\", (bas * altura) / 2, bas + bas + bas);\nbreak;\ncase 4:\nConsole.WriteLine(\"Adiós\");\nbreak;\ndefault:\nConsole.WriteLine(\"Opción no válida\");\nbreak;\nConsole.ReadKey();",
    "image": "assets/images/076a58_e95b65f05fcb42319a8c647df432d4de_mv2.png"
  },
  {
    "number": 11,
    "title": "DIAGRAMA #11 NÚMERO MAYOR",
    "name": "NÚMERO MAYOR",
    "description": "Hacer un algoritmo que solicite dos variables numéricas enteras y muestre cuál es mayor",
    "code": "namespace ConsoleApplication11\nclass Program\nstatic void Main(string[] args)\n//Muestra qué variable mayor\nint numero1, numero2;\nstring leer;\nConsole.WriteLine(\"Introduce el primer número\");\nleer = Console.ReadLine();\nnumero1 = Convert.ToInt16(leer);\nConsole.WriteLine(\"Introduce el segundo número\");\nleer = Console.ReadLine();\nnumero2 = Convert.ToInt16(leer);\nif (numero1 == numero2)\nConsole.WriteLine(\"No hay valor mayor\");\nelse\nif (numero1 > numero2)\nConsole.WriteLine(\"El número mayor es {0}\", numero1);\nelse\nConsole.WriteLine(\"El número mayor es {0}\", numero2);\nConsole.ReadKey();",
    "image": "assets/images/076a58_1ec821d27df8475093f6abe4f793b84c_mv2.png"
  },
  {
    "number": 12,
    "title": "DIAGRAMA #12 NÚMERO PAR O IMPAR",
    "name": "NÚMERO PAR O IMPAR",
    "description": "Hacer un algoritmo que solicite un número entero y muestre si es par o impar",
    "code": "namespace ConsoleApplication12\nclass Program\nstatic void Main(string[] args)\n//Muestra si el número es par o impar\nint numero;\nstring leer;\nConsole.WriteLine(\"Introduce el número\");\nleer = Console.ReadLine();\nnumero = Convert.ToInt16(leer);\nif (numero == 0)\nConsole.WriteLine(\"Tu número es cero. No es par ni impar\");\nelse\nif (numero%2== 0)\nConsole.WriteLine(\"El valor es par\");\nelse\nConsole.WriteLine(\"El valor es impar\");\nConsole.ReadKey();",
    "image": "assets/images/076a58_e5f1da2173024f78be8da7b4090a7de2_mv2.png"
  },
  {
    "number": 13,
    "title": "DIAGRAMA #13 MAYOR O MENOR",
    "name": "MAYOR O MENOR",
    "description": "Hacer un algoritmo que solicite tres números enteros y muestre cuál es el mayor y cuál el menor",
    "code": "namespace ConsoleApplication13\nclass Program\nstatic void Main(string[] args)\n//Muestra el número mayor y el número menor\nint numero1, numero2, numero3;\nstring leer;\nConsole.WriteLine(\"Introduce el primer número\");\nleer = Console.ReadLine();\nnumero1 = Convert.ToInt16(leer);\nConsole.WriteLine(\"Introduce el segundo número\");\nleer = Console.ReadLine();\nnumero2 = Convert.ToInt16(leer);\nConsole.WriteLine(\"Introduce el tercer número\");\nleer = Console.ReadLine();\nnumero3 = Convert.ToInt16(leer);\nif (numero1 == numero2 &amp; numero1 == numero3)\nConsole.WriteLine(\"Todos los números son iguales\");\nelse\nif (numero1 > numero2 &amp; numero1 > numero3)\nif (numero3 > numero2)\nConsole.WriteLine(\"El número mayor es {0} y el menor es {1}\", numero1, numero2);\nelse\nConsole.WriteLine(\"El número mayor es {0} y el menor es {1}\", numero1, numero3);\nelse\nif (numero2 > numero3)\nif (numero1 < numero3)\nConsole.WriteLine(\"El mayor es {0} y el menor es {1}\", numero2, numero1);\nelse\nConsole.WriteLine(\"El mayor es {0} y el menor es {1}\", numero2, numero3);\nelse\nif (numero1 < numero2)\nConsole.WriteLine(\"El mayor es {0} y el menor es {1}\", numero3, numero1);\nelse\nConsole.WriteLine(\"El mayor es {0} y el menor es {1}\", numero3, numero2);\nConsole.ReadKey();",
    "image": "assets/images/076a58_0c0bf8fd94344440b8cb8b50af51e49a_mv2.png"
  },
  {
    "number": 14,
    "title": "DIAGRAMA #14 CONVERSIÓN DE CALIFICACIONES",
    "name": "CONVERSIÓN DE CALIFICACIONES",
    "description": "Hacer un algoritmo que convierta las calificaciones de un kínder a número. Solicitar 3 materias: matemáticas, español e inglés y mostrar el promedio de las 3",
    "code": "namespace ConsoleApplication14\nclass Program\nstatic void Main(string[] args)\n//Muestra el promedio de 3 materias\nstring calif1, calif2, calif3;\ndouble M = 0, E = 0, I = 0;\nConsole.WriteLine(\"Introduce la calificación de español\");\ncalif1 = Console.ReadLine();\ncalif1 = calif1.ToUpper();\nConsole.WriteLine(\"Introduce la calificación de matemáticas\");\ncalif2 = Console.ReadLine();\ncalif2 = calif2.ToUpper();\nConsole.WriteLine(\"Introduce la calificación de inglés\");\ncalif3 = Console.ReadLine();\ncalif3 = calif3.ToUpper();\nswitch (calif1)\ncase \"A\":\nE = E + 10;\nbreak;\ncase \"B\":\nE = E + 8.5;\nbreak;\ncase \"C\":\nE = E + 6.5;\nbreak;\ncase \"D\":\nE = E + 5;\nbreak;\nswitch (calif2)\ncase \"A\":\nM = M + 10;\nbreak;\ncase \"B\":\nM = M + 8.5;\nbreak;\ncase \"C\":\nM = M + 6.5;\nbreak;\ncase \"D\":\nM = M + 5;\nbreak;\nswitch (calif3)\ncase \"A\":\nI = I + 10;\nbreak;\ncase \"B\":\nI = I + 8.5;\nbreak;\ncase \"C\":\nI = I + 6.5;\nbreak;\ncase \"D\":\nI = I + 5;\nbreak;\nConsole.WriteLine(\"El promedio es {0}\", (E + M + I) / 3);\nConsole.ReadKey();",
    "image": "assets/images/076a58_7961c0414a6743f3aa944e62e003e02c_mv2.png"
  },
  {
    "number": 15,
    "title": "DIAGRAMA #15 KILÓMETROS RECORRIDOS",
    "name": "KILÓMETROS RECORRIDOS",
    "description": "Hacer un algoritmo que solicite los kilómetros recorridos de un automóvil. Solicitar el números de cilindros del auto, mostrar los litros de gasolina que se usaron en el recorrido",
    "code": "namespace ConsoleApplication16\nclass Program\nstatic void Main(string[] args)\nint cilindros;\ndouble kilometros;\nstring leer;\nConsole.WriteLine(\"Introduce los kilómetros recorridos\");\nleer = Console.ReadLine();\nkilometros = Convert.ToInt16(leer);\nConsole.WriteLine(\"Introduce los cilindros de tu auto\");\nleer = Console.ReadLine();\ncilindros = Convert.ToInt16(leer);\nif (cilindros == 4 &amp; kilometros > 0)\nConsole.WriteLine(\"Los litros que gastaste fueron {0}\", kilometros / 100);\nelse\nif (cilindros == 6 &amp; kilometros > 0)\nConsole.WriteLine(\"Los litros que gastaste fueron {0}\", kilometros / 50);\nelse\nif (cilindros == 8 &amp; kilometros > 0)\nConsole.WriteLine(\"Los litros que gastaste fueron {0}\", kilometros / 70);\nelse\nConsole.WriteLine(\"Valor inválido\");\nConsole.ReadKey();",
    "image": "assets/images/076a58_f2f341fbb529410380d0cedfc819e140_mv2.png"
  },
  {
    "number": 16,
    "title": "DIAGRAMA #16 MESES",
    "name": "MESES",
    "description": "Hacer un algoritmo que muestre los meses dependiendo del número de días que tengan",
    "code": "namespace ConsoleApplication17\nclass Program\nstatic void Main(string[] args)\n//Muestra los meses dependiendo del número de días que tiene\nint menu;\nstring leer;\nConsole.WriteLine(\"MENÚ \\n 1.-Meses de 28-29 días \\n 2.-Meses de 30 días \\n 3.-Meses de 31 días \\n 4.- Salir\");\nleer = Console.ReadLine();\nmenu = Convert.ToInt16(leer);\nswitch (menu)\ncase 1:\nConsole.WriteLine(\"febrero\");\nbreak;\ncase 2:\nConsole.WriteLine(\"abril, septiembre, julio, noviembre\");\nbreak;\ncase 3:\nConsole.WriteLine(\"enero, marzo, mayo, julio, agosto, octubre, diciembre\");\nbreak;\ncase 4:\nConsole.WriteLine(\"Saliendo\");\nbreak;\ndefault:\nConsole.WriteLine(\"Número inválido\");\nbreak;\nConsole.ReadKey();",
    "image": "assets/images/076a58_271c2d9737194b778dfd33995305f0cb_mv2.png"
  },
  {
    "number": 17,
    "title": "DIAGRAMA #17 CONVERSIÓN ÁREA",
    "name": "CONVERSIÓN ÁREA",
    "description": "Hacer un algoritmo que muestre los meses dependiendo del número de días que tengan",
    "code": "namespace Algo17\nclass Program\nstatic void Main(string[] args)\n//Muestra si el área es inválida, en caso contrario, su equivalencia en centímetros, decímetros, yardas y pies\nint areaM;\nstring leer;\nConsole.WriteLine(\"Introduce el área\");\nleer = Console.ReadLine();\nareaM = Convert.ToInt16(leer);\nif (areaM <= 0)\nConsole.WriteLine(\"El área introducida es inválida\");\nelse\nConsole.WriteLine(\"El área equivale a: {0}cm, {1}dm, {2}yd y {3} ft\", (areaM * 10000), (areaM * 100), (areaM * 1.19599), (areaM * 10.764));\nConsole.ReadKey();",
    "image": "assets/images/076a58_61b2f8f8950b4d778b21fd343c490ae2_mv2.png"
  },
  {
    "number": 18,
    "title": "DIAGRAMA #18 PROMEDIO EDADES FAMILIA",
    "name": "PROMEDIO EDADES FAMILIA",
    "description": "Hacer un algoritmo que solicite la edad de tu papá, tu mamá y la tuya; la edad del papá y la mamá no podrá ser menor a 30 ni mayor a 100; tu edad no podrá ser menor de 16 ni mayor de 50. Mostrar, al final, el promedio de las 3 edades",
    "code": "namespace Algoritmo_18\nclass Program\nstatic void Main(string[] args)\nint edadM, edadP, edadH;\nstring leer;\nConsole.WriteLine(\"Introduce la edad del padre\");\nleer = Console.ReadLine();\nedadP = Convert.ToInt16(leer);\nif (edadP < 30 || edadP > 100)\nConsole.WriteLine(\"Edad inválida\");\nelse\nConsole.WriteLine(\"Introduce la edad de la madre\");\nleer = Console.ReadLine();\nedadM = Convert.ToInt16(leer);\nif (edadM < 30 || edadM > 100)\nConsole.WriteLine(\"Edad inválida\");\nelse\nConsole.WriteLine(\"Introduce tu edad\");\nleer = Console.ReadLine();\nedadH = Convert.ToInt16(leer);\nif (edadH > 16 || edadH < 50)\nConsole.WriteLine(\"El promedio es: {1}\", (edadP + edadM + edadH) / 3);\nelse\nConsole.WriteLine(\"Edad Inválida\");\nConsole.ReadKey();",
    "image": "assets/images/076a58_467d0e97fdc443afa40e78d924e4e5f9_mv2.png"
  },
  {
    "number": 19,
    "title": "DIAGRAMA #19 COSTO DE UNA LLAMADA",
    "name": "COSTO DE UNA LLAMADA",
    "description": "Hacer un algoritmo que solicite la edad de tu papá, tu mamá y la tuya; la edad del papá y la mamá no podrá ser menor a 30 ni mayor a 100; tu edad no podrá ser menor de 16 ni mayor de 50. Mostrar, al final, el promedio de las 3 edades",
    "code": "namespace ConsoleApplication18\nclass Program\nstatic void Main(string[] args)\n//Calcula el monto a pagar de una llamada\nint duracionL;\nstring leer;\nConsole.WriteLine(\"Introduce la duración de la llamada\");\nleer = Console.ReadLine();\nduracionL = Convert.ToInt16(leer);\nif (duracionL <= 0 || duracionL > 60)\nConsole.WriteLine(\"La duración de la llamada es inválida\");\nelse\nif (duracionL < 5)\nConsole.WriteLine(\"Se le cobrará ${0}\", duracionL * 1);\nelse\nConsole.WriteLine(\"El costo de la llamada es {0}\", (duracionL - 5) * .5 + 5);\nConsole.ReadKey();",
    "image": "assets/images/076a58_467d0e97fdc443afa40e78d924e4e5f9_mv2.png"
  },
  {
    "number": 20,
    "title": "DIAGRAMA #20 CICLO FAMILIA",
    "name": "CICLO FAMILIA",
    "description": "Hacer un algoritmo que solicite la cantidad de familiares. Esta cantidad no puede ser mayor o igual a 50. Realizar un ciclo que solicite la edad de cada integrante de la familia. Al salir del ciclo el algoritmo mostrará:\na) La suma total de las edades\nb) El promedio de las edades",
    "code": "namespace ConsoleApplication19\nclass Program\nstatic void Main(string[] args)\n//Muestra la suma y promedio de edades del número de integrantes de familia ingresados\nint numFam, i, edad, sumaG = 0;\nstring leer;\nConsole.WriteLine(\"Introduce el número de integrantes de familia\");\nleer = Console.ReadLine();\nnumFam = Convert.ToInt16(leer);\nif (numFam <= 3 || numFam >= 50)\nConsole.WriteLine(\"Número inválido\");\nelse\nfor (i = 0; i < numFam; i++)\nConsole.WriteLine(\"Introduce la edad del integrante {0}\", i);\nleer = Console.ReadLine();\nedad = Convert.ToInt16(leer);\nsumaG = sumaG + edad;\nConsole.WriteLine(\"La suma es {0} y el promedio es {1}\", sumaG, sumaG / numFam);\nConsole.ReadKey();",
    "image": "assets/images/076a58_72fb1295a7154c7b9ef1a8fcf50b2698_mv2.png"
  },
  {
    "number": 21,
    "title": "DIAGRAMA #21 CASETA DE COBRO",
    "name": "CASETA DE COBRO",
    "description": "Hacer un algoritmo que solicite el número de vehículos que pasan por una caseta de cobro. Realizar un ciclo que solicite el tipo de vehículo donde:\n1) Automóvil\n2) Camión\n3) Trailer\nDentro del ciclo irá sumando por separado cada tipo de vehículo; al terminar el ciclo mostrará:\na) El total por tipo de vehículo\nb) Monto cobrado por cada tipo\nc) El monto total cobrado en la caseta",
    "code": "namespace ConsoleApplication4\nclass Program\nstatic void Main(string[] args)\nint vehiculo, i, sumaAuto = 0, sumaCamion = 0, sumaTrailer = 0, vehiP;\nstring leer;\nConsole.WriteLine(\"&iquest;Cuántos vehículos pasaron por la caseta?\");\nleer = Console.ReadLine();\nvehiP = Convert.ToInt16(leer);\nfor (i = 0; i < vehiP; i++)\nConsole.WriteLine(\"&iquest;Qué tipo de vehículo es?\\n 1.-Automovil 2.-Camión 3.-Trailer\");\nleer = Console.ReadLine();\nvehiculo = Convert.ToInt16(leer);\nswitch (vehiculo)\ncase 1:\nsumaAuto = sumaAuto + 1;\nbreak;\ncase 2:\nsumaCamion = sumaCamion + 1;\nbreak;\ncase 3:\nsumaTrailer = sumaTrailer + 1;\nbreak;\ncase 4:\ndefault:\nbreak;\nConsole.WriteLine(\"Los autos que circularon fueron {0}, los camiones {1} y los trailers fueron {2}\", sumaAuto, sumaCamion, sumaTrailer);\nConsole.WriteLine(\"Se cobró {0} por los autos, {1} por los camiones y {2} por los trailers\", sumaAuto * 100, sumaCamion * 200, sumaTrailer * 500);\nConsole.WriteLine(\"El total cobrado en la caseta fue {0}\", (sumaAuto * 100) + (sumaCamion * 200) + (sumaTrailer * 500));\nConsole.ReadKey();",
    "image": "assets/images/076a58_1ed16677c96a4a049ec5f9de1ff692b4_mv2.png"
  },
  {
    "number": 22,
    "title": "DIAGRAMA #22 CICLO CALIFICACIONES",
    "name": "CICLO CALIFICACIONES",
    "description": "Hacer un algoritmo que solicite 5 calificaciones dentro de un ciclo y, al terminar el ciclo, mostrará el promedio de las calificaciones",
    "code": "namespace ConsoleApplication3\nclass Program\nstatic void Main(string[] args)\ndouble calif, suma = 0;\nint i;\nstring leer;\nfor (i = 0; i < 5; i++)\nConsole.WriteLine(\"Introduce la calificación {0}\", i);\nleer = Console.ReadLine();\ncalif = Convert.ToDouble(leer);\nsuma = suma + calif;\nConsole.WriteLine(\"El promedio es de {0}\", suma / 5);\nConsole.ReadKey();",
    "image": null
  },
  {
    "number": 23,
    "title": "DIAGRAMA #23 FÁBRICA DE SUÉTERES",
    "name": "FÁBRICA DE SUÉTERES",
    "description": "Hacer un algoritmo que solicite el número de suéteres a fabricar. Hacer un ciclo en el que se pida si es un suéter grande o uno chico. NO SE VALIDA NADA. Al terminar el ciclo se deberá mostrar el total de botones usados donde:\nSuéter chico-5 botones\nSuéter grande-10 botones",
    "code": "namespace ConsoleApplication7\nclass Program\nstatic void Main(string[] args)\nint sueter, tamanoS, SumG = 0, SumCh = 0, i;\nstring leer;\nConsole.WriteLine(\"&iquest;Cuántos suéteres se fabricarán?\");\nleer = Console.ReadLine();\nsueter = Convert.ToInt16(leer);\nfor (i = 0; i < sueter; i++)\nConsole.WriteLine(\"&iquest;Qué tipo de suéter es?\\n 1.-Suéter chico 2.-Suéter grande\");\nleer = Console.ReadLine();\ntamanoS = Convert.ToInt16(leer);\nswitch (tamanoS)\ncase 1:\nSumCh = SumCh + 1;\nbreak;\ncase 2:\nSumG = SumG + 1;\nbreak;\nConsole.WriteLine(\"Se necesitarán {0} botones para los suéteres chichos y {1} para los suéteres grandes; en total se necesitarán {2} botones\", SumCh * 5, SumG * 10, SumCh * 5 + SumG * 10);\nConsole.ReadKey();",
    "image": "assets/images/076a58_92ddb2ced7c34705aa8d0879adaccf33_mv2.png"
  },
  {
    "number": 24,
    "title": "DIAGRAMA #24 HUSOS HORARIOS",
    "name": "HUSOS HORARIOS",
    "description": "Hacer un algoritmo que solicite la hora de la Ciudad de México y muestre a qué hora corresponde en Inglaterra, Bali y Sydney, donde:\nInglaterra +9 horas\nBali +13 horas\nSydney +21 horas",
    "code": "namespace ConsoleApplication4\nclass Program\nstatic void Main(string[] args)\nint hourM, hourI,hourB,hourS;\nstring leer;\nConsole.WriteLine(\"Introduce la hora en CDMX\");\nleer = Console.ReadLine();\nhourM = Convert.ToInt16(leer);\nhourI = hourM + 9;\nhourB = hourM + 13;\nhourS = hourM + 21;\nif (hourI > 24)\nConsole.WriteLine(\"En Inglaterra son las {0} HH\", hourI-24);\nelse\nConsole.WriteLine(\"En Inglaterra son las {0} HH\", hourI);\nif (hourB > 24)\nConsole.WriteLine(\"En Balí son las {0} HH\", hourB-24);\nelse\nConsole.WriteLine(\"En Balí son las {0} HH\", hourB);\nif (hourS > 24)\nConsole.WriteLine(\"En Sydney son las {0} HH\", hourS-24);\nelse\nConsole.WriteLine(\"La hora en Sydney es {0} HH\", hourS);\nConsole.ReadKey();",
    "image": null
  },
  {
    "number": 25,
    "title": "DIAGRAMA #25 SUÉTERES CICLO FOR DENTRO DE FOR",
    "name": "SUÉTERES CICLO FOR DENTRO DE FOR",
    "description": "Hacer un algoritmo que pida el tamaño y el estilo de 4 suéteres a fabricar. El tamaño del suéter puede ser chico, mediano o grande y el estilo puede ser cerrado o con botones; en caso de que el suéter sea con botones entrará en otro FOR y se mostrará el número de botón que se le está poniendo donde:\na) Suéter chico= 3 botones\nb) Suéter mediano= 5 botones\nc) Suéter grande = 7 botones\nEn caso contrario de no ser con botones, se mandará el mensaje que se está empaquetando el suéter.",
    "code": "namespace ConsoleApplication7\nclass Program\nstatic void Main(string[] args)\nint i, j, veces=0, tam, estilo;\nstring leer;\nfor (i = 1; i <= 4; i++)\nConsole.WriteLine(\"Introduce el tamaño del suéter \\n 1.-Chico 2.-Mediano 3.-Grande\");\nleer = Console.ReadLine();\ntam = Convert.ToInt16(leer);\nConsole.WriteLine(\"Introduce el estilo del suéter \\n 1.-Cerrado 2.- Con botones\");\nleer = Console.ReadLine();\nestilo = Convert.ToInt16(leer);\nif (tam <= 0 || tam > 3)\nConsole.WriteLine(\"Error en el sueter número {0}\", i);\nelse\nif (estilo < 1 || estilo > 2)\nConsole.WriteLine(\"Error en el sueter número {0}\", i);\nelse\nif (estilo == 2)\nswitch (tam)\ncase 1:\nveces = 3;\nfor (j = 1; j <= veces; j++)\nConsole.WriteLine(\"Pegó el botón {0}\", j);\nbreak;\ncase 2:\nveces = 5;\nfor (j = 1; j <= veces; j++)\nConsole.WriteLine(\"Pegó el botón {0}\", j);\nbreak;\ncase 3:\nveces = 7;\nfor (j = 1; j <= veces; j++)\nConsole.WriteLine(\"Pegó el botón {0}\", j);\nbreak;\nConsole.WriteLine(\"Listo para empacar el sueter con botones número {0}\", i);\nelse\nConsole.WriteLine(\"Listo para empacar sueter cerrado número {0}\", i);\nConsole.ReadKey();",
    "image": "assets/images/076a58_c2e1cb3f3fb941439390003ce1617436_mv2_d_2086_3833_s_2.jpg"
  },
  {
    "number": 26,
    "title": "DIAGRAMA 26. EQUIPO DE",
    "name": "EQUIPO DE",
    "description": "FÚTBOL\nHacer un algoritmo que le solicite a un equipo de futbol:\na) Partidos ganados\nb) Partidos empatados\nc) Partidos perdidos\nValidar cada dato que no sea menor a cero o mayor a 20; en caso de ser error, lo pide de nuevo.\nCalcular el total de puntos obtenidos para el equipo donde:\nAl ganar un partido= ganó 3 puntos\nAl empatar un partido= ganó 1 punto\nAl perder un partido= No gana puntos.",
    "code": "namespace ConsoleApplication9\nclass Program\nstatic void Main(string[] args)\nint parG, parE, parP;\nstring leer;\ndo\nConsole.WriteLine(\"&iquest;Cuántos partidos ganaron?\");\nleer = Console.ReadLine();\nparG = Convert.ToInt16(leer);\nwhile (parG < 0 || parG > 20);\ndo\nConsole.WriteLine(\"&iquest;Cuántos partidos empataron?\");\nleer = Console.ReadLine();\nparE = Convert.ToInt16(leer);\nwhile (parE < 0 || parE > 20);\ndo\nConsole.WriteLine(\"&iquest;Cuántos partidos perdieron?\");\nleer = Console.ReadLine();\nparP = Convert.ToInt16(leer);\nwhile (parP < 0 || parP > 20);\nConsole.WriteLine(\"El equipo ganó {0} puntos de los {1} totales, es decir, perdió {2}\", parG * 3 + parE * 1 + parP * 0, (parG + parE + parP) * 3, (parG * 3 + parE * 1 + parP * 0) - ((parG + parE + parP) * 3));\nConsole.ReadKey();",
    "image": "assets/images/076a58_b6a1cb8249b84cb9ba8c946f0ab938dc_mv2.jpg"
  },
  {
    "number": 27,
    "title": "DIAGRAMA 27.NÚMERO MAYOR Y MENOR CICLO DO-WHILE",
    "name": "NÚMERO MAYOR Y MENOR CICLO DO-WHILE",
    "description": "Hacer un algoritmo usando un ciclo FOR donde se soliciten 3 números o más a validar, a salir del for, el algoritmo mostrará el número mayor y el número menor que se introdujo en esta lista. Puede ser cualquier número",
    "code": "namespace ConsoleApplication21\nclass Program\nstatic void Main(string[] args)\nint numero = 0, mayor=0, menor = 1, lista = 0, j = 0;\nstring leer;\ndo\nConsole.WriteLine(\"Introduce el tamaño de la lista\");\nleer = Console.ReadLine();\nlista = Convert.ToInt16(leer);\nwhile (lista < 3 || lista > 10);\nfor(j=1; j<=lista;j++)\nConsole.WriteLine(\"Dame un número\");\nleer = Console.ReadLine();\nnumero = Convert.ToInt16(leer);\nif (numero > mayor)\nmayor = numero;\nelse\nif (numero < menor)\nmenor = numero;\nConsole.WriteLine(\"El mayor es {0} y el menor es {1}\", mayor, menor);\nConsole.ReadKey();",
    "image": null
  },
  {
    "number": 28,
    "title": "DIAGRAMA 28. MENÚ MICROONDAS",
    "name": "MENÚ MICROONDAS",
    "description": "Hacer un algoritmo que solicite la cocción de un platillo:\nEl pollo tarda 5 minutos\nLas verduras tardan 2 minutos\nEl pescado tarda 4 minutos\nSolicitar el platillo a calentar y se indicará el tiempo de cocción; el algoritmo mostrará:\nEn un FOR, el tiempo\nPreguntar si el platillo se consumirá inmediatamente, en caso de no hacerlo, se preguntará si el platillo se enfrió y preguntará si quiere volverlo a calentar.\nPreguntará si quiere degustar otro platillo.\nTodas los platillos se validan",
    "code": "namespace ConsoleApplication4\nclass Program\nstatic void Main(string[] args)\nint opcion, tiempo, otro=0, enfrio=0,i;\nstring leer;\ndo\nConsole.WriteLine(\"&iquest;Qué desea comer? \\n 1.-Pollo 2.-Verduras 3.-Pescado\");\nleer = Console.ReadLine();\nopcion = Convert.ToInt16(leer);\nwhile (opcion < 1 || opcion > 3);\nConsole.WriteLine(\"Entra platillo al microondas\");\nif (opcion == 1)\ntiempo = 5;\nelse\nif (opcion == 2)\ntiempo = 2;\nelse\ntiempo = 4;\ndo\nfor (i = 1; i <= tiempo; i++)\nConsole.WriteLine(\"Pásó minuto {0} calentándose\", i);\nConsole.WriteLine(\"Sale del microondas\");\ndo\nConsole.WriteLine(\"&iquest;Lo comerá inmediatamente?\\n 1.-Sí 2.-No\");\nleer = Console.ReadLine();\nopcion = Convert.ToInt16(leer);\nwhile (opcion < 1 || opcion > 2);\nif (opcion == 1)\ndo\nConsole.WriteLine(\"Provecho. &iquest;Desea probar otro platillo?\\n 1.-Sí 2.-No\");\nleer = Console.ReadLine();\notro = Convert.ToInt16(leer);\nwhile (otro < 1 || opcion > 2);\nelse\ndo\nConsole.WriteLine(\"Se enfrió. &iquest;Desea volver a calentarlo?\\n 1.-Sí 2.-No\");\nleer = Console.ReadLine();\nenfrio = Convert.ToInt16(leer);\nwhile (enfrio < 1 || enfrio > 2);\nwhile (enfrio == 1);\nConsole.WriteLine(\"Se volvió a calentar\");\nConsole.WriteLine(\"Comensal degustando su platillo\");\nwhile (otro == 1);\nConsole.WriteLine(\"Hasta la vista\");\nConsole.ReadKey();",
    "image": "assets/images/076a58_d68da92972d54ff3a2a7f3f28ffdf519_mv2_d_2020_3245_s_2.jpg"
  },
  {
    "number": 29,
    "title": "DIAGRAMA 29. HERMANOS (WHILE)",
    "name": "HERMANOS (WHILE)",
    "description": "Hacer un algortimo que pregunte si tienes hermanos o hermanos.\nEn caso de ser sí, comenzará un FOR que sacará el promedio de las edades más la tuya, en caso de ser no termina el algoritmo",
    "code": "namespace ConsoleApplication3\nclass Program\nstatic void Main(string[] args)\nint opcion, i, numH, edad, sumEdad = 0;\nstring leer;\ndo\nConsole.WriteLine(\"&iquest;Tienes hermanos?\\n 1.-Sí 2.-No\");\nleer = Console.ReadLine();\nopcion = Convert.ToInt16(leer);\nwhile (opcion < 1 || opcion > 2);\nwhile (opcion == 1)\nConsole.WriteLine(\"&iquest;Cuántos son?\");\nleer = Console.ReadLine();\nnumH = Convert.ToInt16(leer);\nfor (i = 1; i <= numH; i++)\nConsole.WriteLine(\"Dame la edad\");\nleer = Console.ReadLine();\nedad = Convert.ToInt16(leer);\nsumEdad = sumEdad + edad;\nConsole.WriteLine(\"El promedio es {0}\", sumEdad / numH);\nConsole.ReadKey();",
    "image": "assets/images/076a58_931ed645a2cf4543a7979d0153a781a3_mv2.jpg"
  },
  {
    "number": 30,
    "title": "DIAGRAMA 30. EDADES FAMILIA",
    "name": "EDADES FAMILIA",
    "description": "Hacer un algoritmo que pida el número de integrantes de familia. En un ciclo FOR se pedirá la edad de cada uno de los miembros; al final, se mostrará la suma de las edades y el promedio de estas. Se preguntará si se quiere repetir el proceso, en caso de ser \"sí\" volverá a iniciar el programa; en caso de ser \"no\" terminará.",
    "code": "namespace ConsoleApplication5\nclass Program\nstatic void Main(string[] args)\nint n, ciclo, edad = 0, suma = 0, respuesta;\nstring leer;\ndo\nConsole.WriteLine(\"&iquest;Cuántos son en tu familia?\");\nleer = Console.ReadLine();\nn = Convert.ToInt16(leer);\nfor (ciclo = n; ciclo > 0; ciclo--)\nConsole.WriteLine(\"Dame la edad del pariente {0}\", ciclo);\nleer = Console.ReadLine();\nedad = Convert.ToInt16(leer);\nsuma = suma + edad;\nConsole.WriteLine(\"La suma de todas las edades de tu familia es: {0}\", suma);\nConsole.WriteLine(\"El promedio de las edades de tu familia es: {0}\", suma / n);\nConsole.WriteLine(\"&iquest;Desea repetir el proceso? \\n 1.-Sí 2.-No\");\nleer = Console.ReadLine();\nrespuesta = Convert.ToInt16(leer);\nwhile (respuesta == 1);",
    "image": "assets/images/076a58_3f611cbfd4f54b81a3dcf7c31f6904d5_mv2_d_1280_1590_s_2.jpg"
  },
  {
    "number": 31,
    "title": "DIAGRAMA 31. FÁBRICA DE ROLLOS",
    "name": "FÁBRICA DE ROLLOS",
    "description": "Hacer un algoritmo que solicite el número de paquetes de rollos de papel higiénico a fabricar, no puede ser menor de 100 paquetes ni mayor de 500 paquetes, en caso de existir error volverá a pedir el dato.\nSolicitar el tamaño de paquete a producir: Paquetes chicos tienen un total de 3000 hojas o paquetes grandes con un total de 5000 hojas.\nPara producir 1000 hojas, que equivalen a 100 gramos, se requieren:\na) Pulpa-50%\nb) Anilina-30%\nc) Agua-20%\nDeberá calcular y mostrar tanto en gramos como en kilos cuánto se necesita para la producción de cada uno de los productos (pulpa, anilina y agua)",
    "code": "namespace ConsoleApplication24\nclass Program\nstatic void Main(string[] args)\nint numPack, tamPack ;\ndouble gramP=0, gramAn=0, gramH2O=0,gramTotal=0,totalH;\nstring leer;\ndo\nConsole.WriteLine(\"&iquest;Cuántos rollos de papel se fabricarán?\");\nleer = Console.ReadLine();\nnumPack = Convert.ToInt16(leer);\nwhile (numPack < 100 || numPack > 500);\nConsole.WriteLine(\"&iquest;De qué tamaño será el paquete?\\n 1.-Chico 2.-Grande\");\nleer = Console.ReadLine();\ntamPack = Convert.ToInt16(leer);\nif (tamPack == 1)\ntotalH = numPack * 300;\ngramTotal = totalH * 100 / 1000;\ngramP = gramTotal * .50;\ngramAn = gramTotal * .30;\ngramH2O = gramTotal * .20;\nConsole.WriteLine(\"Se requerirán {0} g de pulpa, {1} g de anilina y {2} g de agua, es decir, {3} Kg, {4} Kg, {5} Kg respectivamente\", gramP, gramAn, gramH2O, gramP / 1000, gramAn / 1000, gramH2O / 1000);\nelse\ntotalH = numPack * 500;\ngramTotal = totalH * 100 / 1000;\ngramP = gramTotal * .50;\ngramAn = gramTotal * .30;\ngramH2O = gramTotal * .20;\nConsole.WriteLine(\"Se requerirán {0} g de pulpa, {1} g de anilina y {2} g de agua, es decir, {3} Kg, {4} Kg, {5} Kg respectivamente\", gramP, gramAn, gramH2O, gramP / 1000, gramAn / 1000, gramH2O / 1000);\nConsole.ReadKey();",
    "image": "assets/images/076a58_8626927671524e79a1ca43621ad5291f_mv2.jpg"
  },
  {
    "number": 32,
    "title": "DIAGRAMA 32.USUARIO Y PASAPORTE",
    "name": "USUARIO Y PASAPORTE",
    "description": "Hacer un algoritmo que solicite el usuario y el pasaporte en un ciclo, en el cual, si se introducen datos incorrectos se volverán a pedir. Se le preguntará si se desea continuar, en caso de ser aceptar se le preguntará una vez más, sino, mostrará un mensaje de adiós y terminará el programa",
    "code": "namespace ConsoleApplication4\nclass Program\nstatic void Main(string[] args)\nint usuario=20074365, pasaporte=123, opcion;\nstring leer;\ndo\nConsole.WriteLine(\"Dame el usuario\");\nleer = Console.ReadLine();\nusuario = Convert.ToInt32(leer);\nConsole.WriteLine(\"Dame el pasaporte\");\nleer = Console.ReadLine();\npasaporte = Convert.ToInt16(leer);\nwhile (usuario != 20074365 || pasaporte != 123);\nConsole.WriteLine(\"&iquest;Quieres continuar? \\n 1.- Sí 2.-No\");\nleer = Console.ReadLine();\nopcion = Convert.ToInt16(leer);\nwhile (opcion == 1)\nConsole.WriteLine(\"Entraste al sistema\");\nConsole.WriteLine(\"&iquest;Desea continuar?\\n 1.-Sí 2.- No\");\nleer = Console.ReadLine();\nopcion = Convert.ToInt16(leer);\nConsole.WriteLine(\"Adios\");\nConsole.ReadKey();",
    "image": "assets/images/076a58_c3bbba1da7974c258f6012b7632699cd_mv2_d_1321_1704_s_2.jpg"
  }
];

  let currentAlgoIndex = 0;
  let currentEvidenceIndex = 0;
  const evidenceList = [];

  // Recopilar todas las evidencias de imágenes para el lightbox
  document.querySelectorAll('[data-lightbox-src]').forEach((el, idx) => {
    const item = {
      src: el.getAttribute('data-lightbox-src'),
      title: el.getAttribute('data-title') || 'Evidencia de Proyecto',
      desc: el.getAttribute('data-desc') || '',
      category: el.getAttribute('data-category') || 'Evidencia'
    };
    evidenceList.push(item);
    el.addEventListener('click', (e) => {
      e.preventDefault();
      openLightbox(idx);
    });
  });

  // 2. Lightbox Modal
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxDesc = document.getElementById('lightboxDesc');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');

  function openLightbox(index) {
    if (!evidenceList[index]) return;
    currentEvidenceIndex = index;
    const item = evidenceList[currentEvidenceIndex];
    lightboxImg.src = item.src;
    lightboxTitle.textContent = item.title;
    lightboxDesc.textContent = item.desc;
    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  function nextLightbox() {
    currentEvidenceIndex = (currentEvidenceIndex + 1) % evidenceList.length;
    openLightbox(currentEvidenceIndex);
  }

  function prevLightbox() {
    currentEvidenceIndex = (currentEvidenceIndex - 1 + evidenceList.length) % evidenceList.length;
    openLightbox(currentEvidenceIndex);
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxNext) lightboxNext.addEventListener('click', nextLightbox);
  if (lightboxPrev) lightboxPrev.addEventListener('click', prevLightbox);

  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (!lightboxModal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextLightbox();
    if (e.key === 'ArrowLeft') prevLightbox();
  });

  // 3. Renderizar Lista de Algoritmos en el Sidebar
  const algoListEl = document.getElementById('algoList');
  const algoSearch = document.getElementById('algoSearch');

  function renderAlgoList(filter = '') {
    if (!algoListEl) return;
    algoListEl.innerHTML = '';
    const filtered = algorithmsData.filter(a => 
      a.title.toLowerCase().includes(filter.toLowerCase()) || 
      a.name.toLowerCase().includes(filter.toLowerCase()) ||
      a.description.toLowerCase().includes(filter.toLowerCase())
    );

    filtered.forEach((algo) => {
      const realIndex = algorithmsData.findIndex(x => x.number === algo.number);
      const li = document.createElement('li');
      li.className = `algo-item ${realIndex === currentAlgoIndex ? 'active' : ''}`;
      li.innerHTML = `
        <div class="algo-item-num">Algoritmo #${algo.number}</div>
        <div class="algo-item-title">${algo.name}</div>
      `;
      li.addEventListener('click', () => {
        loadAlgoDetail(realIndex);
        document.querySelectorAll('.algo-item').forEach(el => el.classList.remove('active'));
        li.classList.add('active');
      });
      algoListEl.appendChild(li);
    });
  }

  // Cargar Detalle de Algoritmo
  const algoDetailTitle = document.getElementById('algoDetailTitle');
  const algoDetailDesc = document.getElementById('algoDetailDesc');
  const algoFlowchartImg = document.getElementById('algoFlowchartImg');
  const algoFlowchartFrame = document.getElementById('algoFlowchartFrame');
  const algoCodeBlock = document.getElementById('algoCodeBlock');
  const copyCodeBtn = document.getElementById('copyCodeBtn');

  function loadAlgoDetail(index) {
    currentAlgoIndex = index;
    const algo = algorithmsData[index];
    if (!algo) return;

    if (algoDetailTitle) algoDetailTitle.textContent = algo.title;
    if (algoDetailDesc) algoDetailDesc.textContent = algo.description;

    if (algoFlowchartImg && algoFlowchartFrame) {
      if (algo.image) {
        algoFlowchartImg.src = algo.image;
        algoFlowchartImg.style.display = 'block';
        algoFlowchartFrame.style.display = 'block';
        algoFlowchartFrame.onclick = () => {
          lightboxImg.src = algo.image;
          lightboxTitle.textContent = algo.title;
          lightboxDesc.textContent = algo.description;
          lightboxModal.classList.add('active');
        };
      } else {
        algoFlowchartImg.style.display = 'none';
        algoFlowchartFrame.style.display = 'none';
      }
    }

    if (algoCodeBlock) {
      algoCodeBlock.textContent = algo.code || '// Código C# documentado en la suite de algoritmos UMAD';
    }
  }

  if (algoSearch) {
    algoSearch.addEventListener('input', (e) => {
      renderAlgoList(e.target.value);
    });
  }

  // Botón Copiar Código
  if (copyCodeBtn) {
    copyCodeBtn.addEventListener('click', () => {
      const code = algoCodeBlock ? algoCodeBlock.textContent : '';
      navigator.clipboard.writeText(code).then(() => {
        showToast('¡Código C# copiado al portapapeles!');
      }).catch(() => {
        showToast('Error al copiar código.');
      });
    });
  }

  // Tabs dentro del Algoritmo Lab
  const tabBtns = document.querySelectorAll('.algo-tab-btn');
  const viewPanels = document.querySelectorAll('.algo-view-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-tab');
      tabBtns.forEach(b => b.classList.remove('active'));
      viewPanels.forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      const panel = document.getElementById(target);
      if (panel) panel.classList.add('active');
    });
  });

  // 4. Toast Notification
  const toastEl = document.getElementById('toastMsg');
  function showToast(msg) {
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    setTimeout(() => {
      toastEl.classList.remove('show');
    }, 3000);
  }

  // 5. Filtro de Categorías / Píldoras
  const filterPills = document.querySelectorAll('.filter-pill');
  const allSections = document.querySelectorAll('.category-section');

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const cat = pill.getAttribute('data-category');
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      if (cat === 'all') {
        allSections.forEach(sec => sec.style.display = 'block');
      } else {
        allSections.forEach(sec => {
          if (sec.getAttribute('data-category') === cat) {
            sec.style.display = 'block';
            sec.scrollIntoView({ behavior: 'smooth' });
          } else {
            sec.style.display = 'none';
          }
        });
      }
    });
  });

  // 6. Búsqueda Global en Tarjetas
  const globalSearchInput = document.getElementById('globalSearchInput');
  if (globalSearchInput) {
    globalSearchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      const cards = document.querySelectorAll('.card');
      
      cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(q)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }

  // Inicializar Lab y Lista
  renderAlgoList();
  loadAlgoDetail(0);

  // Animación suave de contadores estadísticos
  const statNumbers = document.querySelectorAll('.stat-number');
  statNumbers.forEach(stat => {
    const target = parseInt(stat.getAttribute('data-count') || '0', 10);
    if (!target) return;
    let count = 0;
    const speed = Math.ceil(target / 40);
    const updateCounter = () => {
      count += speed;
      if (count < target) {
        stat.textContent = count + (stat.getAttribute('data-suffix') || '');
        setTimeout(updateCounter, 30);
      } else {
        stat.textContent = target + (stat.getAttribute('data-suffix') || '');
      }
    };
    updateCounter();
  });
});
