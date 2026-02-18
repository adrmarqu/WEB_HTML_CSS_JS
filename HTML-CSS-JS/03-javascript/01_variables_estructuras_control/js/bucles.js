let cont = 0, cont2, cont3 = 100;

while (cont < 5)
    console.log(`repetición número while: ${cont++}`);

for (cont2 = 0; cont2 < 5; cont2++)
    console.log(`repetición número for: ${cont2}`);

/* Do while es como while/for pero siempre lo hace una vez independientemente de la condición */
do
{
    console.log(`repetición número dowhile: ${cont3++}`);
}
while (cont3 < 5)

console.log(`Valor final while: ${cont}`);
console.log(`Valor final for: ${cont2}`);
console.log(`Valor final dowhile: ${cont3}`);