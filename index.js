let buttons-tables = document.getElementsByTagName("button");
for (const element of buttons) {
    element.addEventListener("click", function (element) {
        console.log(element);
        // console.log(element.target.parentElement.previousElementSibling.className);
        // let targetButton = element.target;
        // let targetParenClass = element.target.targetButton.parentElement.previousElementSibling.className;


        switch (element) {
            case 'main-table': console.log(targetParenClass + "  fdesfd");
            default: console.log(element.prototype + "  ваапв");
        }
    });
}

