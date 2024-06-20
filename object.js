const dot = {
    x: 100,
    y: 100,
    size: 40,
    color: 'black',
};

const obj = new Object();

delete dot.color;
obj.color = 'black';

const song = {
    title: "Over the Rainbow",
    composer: "Harold Arlen",
    lyrics: "Yip Harburg",
    year: 1939,
    singer: "Judy Garland",
    versions: [
        {
            artist: "Israel Kamakawiwo'ole",
            year: 1993,
        },
        {
            artist: "Cliff Richard",
            year: 2001,
        },
        {
            artist: "Danielle Hope",
            year: 2010,
        },
        {
            artist: "Ariana Grande",
            year: 2017,
        },
    ],
};

for (let [key, value] of Object.entries(song)) {
    if (typeof value === 'object')
        {
            for (let [k, v] of Object.entries(value)) {
                console.log(`${k} is ${v}`);
            }

        }
    console.log(`${key} is ${value}`);
}