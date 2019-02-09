import term from './term';

const abbreviate = (party) => {
  let specialTerms = party
      .replace("also known as", "a.k.a.")
      .replace("Also Known As", "a.k.a.")
      .replace("attorney general", "Atty. Gen.")
      .replace("Attorney General", "Atty. Gen.")
      .replace("doing business as", "d.b.a.")
      .replace("Doing Business As", "d.b.a.")
      .replace("formerly known as", "f.k.a.")
      .replace("Formerly Known As", "f.k.a.")
      .replace("in the matter of", "In re")
      .replace("In the Matter of", "In re")
      .replace("now known as", "n.k.a.")
      .replace("Now Known As", "n.k.a.")
      .replace("prosecuting attorney", "Pros. Atty.")
      .replace("Prosecuting Attorney", "Pros. Atty.")
      .replace("savings & loan", "S. & L.")
      .replace("Savings & Loan", "S. & L.")
    let splitParty = specialTerms.trim().split(" ");
    for (let i = 0; i < splitParty.length; i++) {
      for (let y = 0; y < term.length; y++) {
        if (splitParty[i].toLowerCase() === term[y].fullTerm) {
          splitParty[i] = term[y].abbTerm;
        } else if (splitParty[i].toLowerCase() === term[y].pluralTerm) {
          splitParty[i] = term[y].plTerm;
        };
      };
    };
    let abbParty = splitParty.join(" ");
    return abbParty
}

export default abbreviate;