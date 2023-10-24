// Magic 8 Ball

// Event Listener

document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let question = document.getElementById("input-in").value.toLowerCase();
  let randNum = Math.random();
  if (randNum < 0.2) {
    document.getElementById("output").innerHTML = `Answer: Without a Doubt.`;
  } else if (randNum < 0.4) {
    document.getElementById("output").innerHTML = `Answer: As I see it, yes.`;
  } else if (randNum < 0.6) {
    document.getElementById(
      "output"
    ).innerHTML = `Answer: Concentrate and ask again.`;
  } else if (randNum < 0.8) {
    document.getElementById("output").innerHTML = `Answer: Don't count on it.`;
  } else {
    document.getElementById(
      "output"
    ).innerHTML = `Answer: Outlook not so good.`;
  }

  console.log(question);
  if (question === "does a magic eight ball actually work?") {
    document.getElementById(
      "output"
    ).innerHTML = `Answer: How dare you doubt me!`;
  } else if (question === "is javascript awesome?") {
    document.getElementById("output").innerHTML = `Answer: Of course!`;
  } else if (question === "") {
    document.getElementById(
      "output"
    ).innerHTML = `Answer: Please ask a question...`;
  }
}
