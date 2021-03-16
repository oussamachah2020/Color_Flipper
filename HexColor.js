
    const Hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D",
    "E","F"];
    const button = document.getElementById("btn");
    const color_name = document.querySelector('.Color');

    button.addEventListener('click',function() {
        let HexSym = "#";
        for(let i = 0;i < 6;i++) {
            HexSym += Hex[RandomNumber()];
        }

        document.body.style.backgroundColor = HexSym;
        color_name.textContent = HexSym;
    });

    function RandomNumber() {
        return Math.floor(Math.random() * Hex.length);
    }
    