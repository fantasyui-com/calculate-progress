# calculate-progress

Progress calculator that returns a perfectly formatted percent value. [Algorithm, Math]

```JavaScript

const calculateProgress = require('calculate-progress');

const max = 100;
for (let i=0; i<=max; i++){
  console.log( `${i} of ${max} = ${calculateProgress(i,max)}% (in standard mode)` );
}

for (let i=0; i<=max; i++){
  console.log( `${i} of ${max} = ${calculateProgress(i,max,{fixedWidth:true})}% (in fixed width mode)` );
}

const myAge = 41;
const localMortalityAverage = 77;
const tpl = 'Congratulations you have successfully survived %s% of your journey';
const result1 = calculateProgress(myAge, localMortalityAverage);
console.log( tpl + ' (default display mode).', result1 );

const result2 = calculateProgress(myAge, localMortalityAverage, {fixedWidth:true});
console.log( tpl + ' (fixed width mode).', result2 )


```

```bash

[user@computer calculate-progress]$ ./test.js


0 of 100 = 0% (in standard mode)
1 of 100 = 1% (in standard mode)
2 of 100 = 2% (in standard mode)
3 of 100 = 3% (in standard mode)
4 of 100 = 4% (in standard mode)
5 of 100 = 5% (in standard mode)
6 of 100 = 6% (in standard mode)
7 of 100 = 7% (in standard mode)
8 of 100 = 8% (in standard mode)
9 of 100 = 9% (in standard mode)
10 of 100 = 10% (in standard mode)
11 of 100 = 11% (in standard mode)
12 of 100 = 12% (in standard mode)
13 of 100 = 13% (in standard mode)
14 of 100 = 14% (in standard mode)
15 of 100 = 15% (in standard mode)
16 of 100 = 16% (in standard mode)
17 of 100 = 17% (in standard mode)
18 of 100 = 18% (in standard mode)
19 of 100 = 19% (in standard mode)
20 of 100 = 20% (in standard mode)
21 of 100 = 21% (in standard mode)
22 of 100 = 22% (in standard mode)
23 of 100 = 23% (in standard mode)
24 of 100 = 24% (in standard mode)
25 of 100 = 25% (in standard mode)
26 of 100 = 26% (in standard mode)
27 of 100 = 27% (in standard mode)
28 of 100 = 28% (in standard mode)
29 of 100 = 29% (in standard mode)
30 of 100 = 30% (in standard mode)
31 of 100 = 31% (in standard mode)
32 of 100 = 32% (in standard mode)
33 of 100 = 33% (in standard mode)
34 of 100 = 34% (in standard mode)
35 of 100 = 35% (in standard mode)
36 of 100 = 36% (in standard mode)
37 of 100 = 37% (in standard mode)
38 of 100 = 38% (in standard mode)
39 of 100 = 39% (in standard mode)
40 of 100 = 40% (in standard mode)
41 of 100 = 41% (in standard mode)
42 of 100 = 42% (in standard mode)
43 of 100 = 43% (in standard mode)
44 of 100 = 44% (in standard mode)
45 of 100 = 45% (in standard mode)
46 of 100 = 46% (in standard mode)
47 of 100 = 47% (in standard mode)
48 of 100 = 48% (in standard mode)
49 of 100 = 49% (in standard mode)
50 of 100 = 50% (in standard mode)
51 of 100 = 51% (in standard mode)
52 of 100 = 52% (in standard mode)
53 of 100 = 53% (in standard mode)
54 of 100 = 54% (in standard mode)
55 of 100 = 55% (in standard mode)
56 of 100 = 56% (in standard mode)
57 of 100 = 57% (in standard mode)
58 of 100 = 58% (in standard mode)
59 of 100 = 59% (in standard mode)
60 of 100 = 60% (in standard mode)
61 of 100 = 61% (in standard mode)
62 of 100 = 62% (in standard mode)
63 of 100 = 63% (in standard mode)
64 of 100 = 64% (in standard mode)
65 of 100 = 65% (in standard mode)
66 of 100 = 66% (in standard mode)
67 of 100 = 67% (in standard mode)
68 of 100 = 68% (in standard mode)
69 of 100 = 69% (in standard mode)
70 of 100 = 70% (in standard mode)
71 of 100 = 71% (in standard mode)
72 of 100 = 72% (in standard mode)
73 of 100 = 73% (in standard mode)
74 of 100 = 74% (in standard mode)
75 of 100 = 75% (in standard mode)
76 of 100 = 76% (in standard mode)
77 of 100 = 77% (in standard mode)
78 of 100 = 78% (in standard mode)
79 of 100 = 79% (in standard mode)
80 of 100 = 80% (in standard mode)
81 of 100 = 81% (in standard mode)
82 of 100 = 82% (in standard mode)
83 of 100 = 83% (in standard mode)
84 of 100 = 84% (in standard mode)
85 of 100 = 85% (in standard mode)
86 of 100 = 86% (in standard mode)
87 of 100 = 87% (in standard mode)
88 of 100 = 88% (in standard mode)
89 of 100 = 89% (in standard mode)
90 of 100 = 90% (in standard mode)
91 of 100 = 91% (in standard mode)
92 of 100 = 92% (in standard mode)
93 of 100 = 93% (in standard mode)
94 of 100 = 94% (in standard mode)
95 of 100 = 95% (in standard mode)
96 of 100 = 96% (in standard mode)
97 of 100 = 97% (in standard mode)
98 of 100 = 98% (in standard mode)
99 of 100 = 99% (in standard mode)
100 of 100 = 100% (in standard mode)



0 of 100 = 000.00% (in fixed width mode)
1 of 100 = 001.00% (in fixed width mode)
2 of 100 = 002.00% (in fixed width mode)
3 of 100 = 003.00% (in fixed width mode)
4 of 100 = 004.00% (in fixed width mode)
5 of 100 = 005.00% (in fixed width mode)
6 of 100 = 006.00% (in fixed width mode)
7 of 100 = 007.00% (in fixed width mode)
8 of 100 = 008.00% (in fixed width mode)
9 of 100 = 009.00% (in fixed width mode)
10 of 100 = 010.00% (in fixed width mode)
11 of 100 = 011.00% (in fixed width mode)
12 of 100 = 012.00% (in fixed width mode)
13 of 100 = 013.00% (in fixed width mode)
14 of 100 = 014.00% (in fixed width mode)
15 of 100 = 015.00% (in fixed width mode)
16 of 100 = 016.00% (in fixed width mode)
17 of 100 = 017.00% (in fixed width mode)
18 of 100 = 018.00% (in fixed width mode)
19 of 100 = 019.00% (in fixed width mode)
20 of 100 = 020.00% (in fixed width mode)
21 of 100 = 021.00% (in fixed width mode)
22 of 100 = 022.00% (in fixed width mode)
23 of 100 = 023.00% (in fixed width mode)
24 of 100 = 024.00% (in fixed width mode)
25 of 100 = 025.00% (in fixed width mode)
26 of 100 = 026.00% (in fixed width mode)
27 of 100 = 027.00% (in fixed width mode)
28 of 100 = 028.00% (in fixed width mode)
29 of 100 = 029.00% (in fixed width mode)
30 of 100 = 030.00% (in fixed width mode)
31 of 100 = 031.00% (in fixed width mode)
32 of 100 = 032.00% (in fixed width mode)
33 of 100 = 033.00% (in fixed width mode)
34 of 100 = 034.00% (in fixed width mode)
35 of 100 = 035.00% (in fixed width mode)
36 of 100 = 036.00% (in fixed width mode)
37 of 100 = 037.00% (in fixed width mode)
38 of 100 = 038.00% (in fixed width mode)
39 of 100 = 039.00% (in fixed width mode)
40 of 100 = 040.00% (in fixed width mode)
41 of 100 = 041.00% (in fixed width mode)
42 of 100 = 042.00% (in fixed width mode)
43 of 100 = 043.00% (in fixed width mode)
44 of 100 = 044.00% (in fixed width mode)
45 of 100 = 045.00% (in fixed width mode)
46 of 100 = 046.00% (in fixed width mode)
47 of 100 = 047.00% (in fixed width mode)
48 of 100 = 048.00% (in fixed width mode)
49 of 100 = 049.00% (in fixed width mode)
50 of 100 = 050.00% (in fixed width mode)
51 of 100 = 051.00% (in fixed width mode)
52 of 100 = 052.00% (in fixed width mode)
53 of 100 = 053.00% (in fixed width mode)
54 of 100 = 054.00% (in fixed width mode)
55 of 100 = 055.00% (in fixed width mode)
56 of 100 = 056.00% (in fixed width mode)
57 of 100 = 057.00% (in fixed width mode)
58 of 100 = 058.00% (in fixed width mode)
59 of 100 = 059.00% (in fixed width mode)
60 of 100 = 060.00% (in fixed width mode)
61 of 100 = 061.00% (in fixed width mode)
62 of 100 = 062.00% (in fixed width mode)
63 of 100 = 063.00% (in fixed width mode)
64 of 100 = 064.00% (in fixed width mode)
65 of 100 = 065.00% (in fixed width mode)
66 of 100 = 066.00% (in fixed width mode)
67 of 100 = 067.00% (in fixed width mode)
68 of 100 = 068.00% (in fixed width mode)
69 of 100 = 069.00% (in fixed width mode)
70 of 100 = 070.00% (in fixed width mode)
71 of 100 = 071.00% (in fixed width mode)
72 of 100 = 072.00% (in fixed width mode)
73 of 100 = 073.00% (in fixed width mode)
74 of 100 = 074.00% (in fixed width mode)
75 of 100 = 075.00% (in fixed width mode)
76 of 100 = 076.00% (in fixed width mode)
77 of 100 = 077.00% (in fixed width mode)
78 of 100 = 078.00% (in fixed width mode)
79 of 100 = 079.00% (in fixed width mode)
80 of 100 = 080.00% (in fixed width mode)
81 of 100 = 081.00% (in fixed width mode)
82 of 100 = 082.00% (in fixed width mode)
83 of 100 = 083.00% (in fixed width mode)
84 of 100 = 084.00% (in fixed width mode)
85 of 100 = 085.00% (in fixed width mode)
86 of 100 = 086.00% (in fixed width mode)
87 of 100 = 087.00% (in fixed width mode)
88 of 100 = 088.00% (in fixed width mode)
89 of 100 = 089.00% (in fixed width mode)
90 of 100 = 090.00% (in fixed width mode)
91 of 100 = 091.00% (in fixed width mode)
92 of 100 = 092.00% (in fixed width mode)
93 of 100 = 093.00% (in fixed width mode)
94 of 100 = 094.00% (in fixed width mode)
95 of 100 = 095.00% (in fixed width mode)
96 of 100 = 096.00% (in fixed width mode)
97 of 100 = 097.00% (in fixed width mode)
98 of 100 = 098.00% (in fixed width mode)
99 of 100 = 099.00% (in fixed width mode)
100 of 100 = 100.00% (in fixed width mode)


Congratulations you have successfully survived 53.25% of your journey (default display mode).
Congratulations you have successfully survived 053.25% of your journey (fixed width mode).


```
