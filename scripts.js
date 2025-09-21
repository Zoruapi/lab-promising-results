document.addEventListener("DOMContentLoaded", function () {
    thenCatch();
    asyncAwait();
});

// =============== Promise.then() Chaining section =================

function thenCatch() {
    let btn = document.getElementById('thenChaining');
    let mid = document.getElementById('chainMiddle');
    let final = document.getElementById('chainFinalResult');

    btn.addEventListener("click", () => {
        mid.innerHTML = "Intermedium results: ";
        final.innerText = "The final result is ";
        // Objective 2
        slowMath.add(6, 2).then((value) => {
            mid.innerText = mid.textContent + value;
            return slowMath.multiply(value, 2);
        }).then((value) => {
            mid.innerText = mid.textContent + ", " + value;
            return slowMath.divide(value, 4);
        }).then((value) => {
            mid.innerText = mid.textContent + ", " + value;
            return slowMath.subtract(value, 3);
        }).then((value) => {
            mid.innerText = mid.textContent + ", " + value;
            return slowMath.add(value, 98);
        }).then((value) => {
            mid.innerText = mid.textContent + ", " + value;
            return slowMath.remainder(value, 2);
        }).then((value) => {
            mid.innerText = mid.textContent + ", " + value;
            return slowMath.multiply(value, 50);
        }).then((value) => {
            mid.innerText = mid.textContent + ", " + value;
            return slowMath.remainder(value, 40);
        }).then((value) => {
            mid.innerText = mid.textContent + ", " + value;
            return slowMath.add(value, 32);
        }).then((value) => {
            final.innerText = final.textContent + value;
        }).catch((err) => {
            alert(err);
        });

        // Objective 4
        /* When I change the first step to add 1 and 1 instead of 6 and 2 the following
           happens:
           The first 3 resolve correctly but the fourth promises gets rejected cause the
           value it's negative.
           Because of this rejection, the rest of the Promises in the promise chain don't
           get ejecuted and its goes directly to the catch((err))
        
        */

    });
}

// =============== Async/Await section =================

function asyncAwait() {
    let btn = document.getElementById('asyncAwait');
    let mid = document.getElementById('awaitMiddle');
    let final = document.getElementById('awaitFinalResult');

    btn.addEventListener("click", () => {
        mid.innerHTML = "Intermedium results: ";
        final.innerText = "The final result is ";
        doMath(mid, final);
    });
}

async function doMath(mid, final) {

    try {
        let value = await slowMath.add(6, 2);
        mid.innerText = mid.textContent + value;
        value = await slowMath.multiply(value, 2);
        mid.innerText = mid.textContent + ", " + value;
        value = await slowMath.divide(value, 4);
        mid.innerText = mid.textContent + ", " + value;
        value = await slowMath.subtract(value, 3);
        mid.innerText = mid.textContent + ", " + value;
        value = await slowMath.add(value, 98);
        mid.innerText = mid.textContent + ", " + value;
        value = await slowMath.remainder(value, 2);
        mid.innerText = mid.textContent + ", " + value;
        value = await slowMath.multiply(value, 50);
        mid.innerText = mid.textContent + ", " + value;
        value = await slowMath.remainder(value, 40);
        mid.innerText = mid.textContent + ", " + value;
        value = await slowMath.add(value, 32);
        final.innerText = final.textContent + value;
    } catch (err) {
        alert(err);
    }
}