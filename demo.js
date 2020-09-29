function DemoAccessControl() {

    // public or private variable
    let accessObject = this;
    // public
    // public or private variable
    accessObject.nummer = 1;
    // private
    // public or private variable
    accessObject.tekst = 'Hello';
    // private
    // public or private variable
    this.aNumber = 10;
    // public
    // public or private variable
    let anOtherNumber = 20;
    // private
    // priviliged or private method
    this.getAnOtherNumber = function () {
        return anOtherNumber;
    }
    // priviliged

    // priviliged or private method
    this.setAnOtherNumber = function (number) {
        anOtherNumber = number;
    }
     // priviliged

    // priviliged or private method
    let objectValues = function () {
        console.log(anOtherNumber,
                    accessObject.nummer,
                    accessObject.tekst );
    }
    this.info = function() {
        objectValues;
    }
    // private

}

let demo = new DemoAccessControl();
demo.nummer = 20;
console.setAnOtherNumber;
console.getAnOtherNumber;
console.info;
console.aNumber;
console.accessObject.tekst;
console.accessObject.nummer;
console.accessObject;
/*
Een variabele is private of public
Voor een method of functie bestaat een iets andere benaming
deze kunnen priviliged of private zijn.

Priviliged:
    kan de private variabelen ophalen of wijzigen
Private:
    zijn niet zichtbaar buiten class of object

 1.
 Maak een nieuwe variabele met de naam demo aan
 waarin je een nieuw object DemoAccessControl stopt

 2.
 Probeer nu alle variabelen en methods aan te roepen

 3.
 Welke variabelen zijn public of private
 Welke methods zijn zichtbaar in je variabele

 4.
 Probeer de interface te maken

*/








