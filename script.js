document.addEventListener('DOMContentLoaded', () => {
    // Function to handle adding a new button
    function addButton(buttonClass, targetDivClass) {
        const buttons = document.querySelectorAll(buttonClass);

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const inputText = prompt('Kérlek, add meg a gomb szövegét:');
                if (inputText) {
                    const newButton = document.createElement('button');
                    newButton.textContent = inputText;

                    const targetDiv = button.closest(`.${targetDivClass}`);
                    if (targetDiv) {
                        targetDiv.appendChild(newButton);
                    } else {
                        alert('Cél div nem található.');
                    }
                }
            });
        });
    }

    // Function to handle adding a new button
    function addParagraph(buttonClass, targetDivClass) {
        const buttons = document.querySelectorAll(buttonClass);

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const inputText = prompt('Kérlek, add meg a gomb szövegét:');
                if (inputText) {
                    const newP = document.createElement('p');
                    newP.textContent = inputText;

                    const targetDiv = button.closest(`.${targetDivClass}`);
                    if (targetDiv) {
                        targetDiv.appendChild(newP);
                    } else {
                        alert('Cél div nem található.');
                    }
                }
            });
        });
    }

    // Add functionality to all buttons
    addParagraph('.plusszFeladatok', 'feladatok');
    addButton('.plusszProjektek', 'projektek');
    addButton('.plusszCegek', 'cegek');
});