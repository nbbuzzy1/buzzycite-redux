console.log("test");

const userInput = prompt("enter case term");
const test = userInput.toLowerCase();

export const caseName = [
  {
    fullTerm: 'accident',
    abbTerm: 'Acc.',
    plTerm: 'Accs.'
  },
  {
    fullTerm: 'administrative',
    abbTerm: 'Adm.',
    plTerm: 'Adms.'
  },
  {
    fullTerm: 'administrator',
    abbTerm: 'Admr.',
    plTerm: 'Admrs.'
  },
  {
    fullTerm: 'also known as',
    abbTerm: 'a.k.a.',
    plTerm: userInput
  },
  {
    fullTerm: 'america',
    abbTerm: 'Am.',
    plTerm: 'Ams.'
  },
  {
    fullTerm: 'american',
    abbTerm: 'Am.',
    plTerm: 'Ams.'
  },
  {
    fullTerm: 'and',
    abbTerm: '&',
    plTerm: userInput
  },
  {
    fullTerm: 'association',
    abbTerm: 'Assoc.',
    plTerm: 'Assocs.'
  },
  {
    fullTerm: 'assurance',
    abbTerm: 'Assn.',
    plTerm: 'Assns.'
  },
  {
    fullTerm: 'attorney General',
    abbTerm: 'Atty. Gen.',
    plTerm: 'Atty. Gens.'
  },
  {
    fullTerm: 'auditor',
    abbTerm: 'Aud.',
    plTerm: 'Auds.'
  },
  {
    fullTerm: 'authority',
    abbTerm: 'Auth.',
    plTerm: 'Auths.'
  },
  {
    fullTerm: 'automobile',
    abbTerm: 'Auto.',
    plTerm: 'Autos.'
  },
  {
    fullTerm: 'avenue',
    abbTerm: 'Ave.',
    plTerm: 'Aves.'
  },
  {
    fullTerm: 'board',
    abbTerm: 'Bd.',
    plTerm: 'Bds.'
  },
  {
    fullTerm: 'boulevard',
    abbTerm: 'Blvd.',
    plTerm: 'Blvds.'
  },
  {
    fullTerm: 'brotherhood',
    abbTerm: 'Bhd.',
    plTerm: 'Bhds.'
  },
  {
    fullTerm: 'brothers',
    abbTerm: 'Bros.',
    plTerm: userInput
  },
  {
    fullTerm: 'building',
    abbTerm: 'Bldg.',
    plTerm: 'Bldgs.'
  },
  {
    fullTerm: 'bureau',
    abbTerm: 'Bur.',
    plTerm: 'Burs.'
  },
  {
    fullTerm: 'casualty',
    abbTerm: 'Cas.',
    plTerm: userInput
  },
  {
    fullTerm: 'center',
    abbTerm: 'Ctr.',
    plTerm: 'Ctrs.'
  },
  {
    fullTerm: 'central',
    abbTerm: 'Cent.',
    plTerm: 'Cents.'
  },
  {
    fullTerm: 'chemical',
    abbTerm: 'Chem.',
    plTerm: 'Chems.'
  },
  {
    fullTerm: 'civil',
    abbTerm: 'Civ.',
    plTerm: 'Civs.'
  },
  {
    fullTerm: 'commission',
    abbTerm: 'Comm.',
    plTerm: 'Comms.'
  },
  {
    fullTerm: 'commissioner',
    abbTerm: 'Commr.',
    plTerm: 'Commrs.'
  },
  {
    fullTerm: 'committee',
    abbTerm: 'Commt.',
    plTerm: 'Commts.'
  },
  {
    fullTerm: 'company',
    abbTerm: 'Co.',
    plTerm: userInput
  },
  {
    fullTerm: 'compensation',
    abbTerm: 'Comp.',
    plTerm: 'Comps.'
  },
  {
    fullTerm: 'consolidated',
    abbTerm: 'Consol.',
    plTerm: 'Consols.'
  },
  {
    fullTerm: 'construction',
    abbTerm: 'Constr.',
    plTerm: 'Constrs.'
  },
  {
    fullTerm: 'contractor',
    abbTerm: 'Contr.',
    plTerm: 'Contrs.'
  },
  {
    fullTerm: 'cooperative',
    abbTerm: 'Coop.',
    plTerm: 'Coops.'
  },
  {
    fullTerm: 'corporation',
    abbTerm: 'Corp.',
    plTerm: 'Corps.'
  },
  {
    fullTerm: 'corrections',
    abbTerm: 'Corr.',
    plTerm: userInput
  },
  {
    fullTerm: 'correctional',
    abbTerm: 'Corr.',
    plTerm: 'Corrs.'
  },
  {
    fullTerm: 'county',
    abbTerm: 'Cty.',
    plTerm: userInput
  },
  {
    fullTerm: 'department',
    abbTerm: 'Dept.',
    plTerm: 'Depts.'
  },
  {
    fullTerm: 'development',
    abbTerm: 'Dev.',
    plTerm: 'Devs.'
  },
  {
    fullTerm: 'developmental',
    abbTerm: 'Dev.',
    plTerm: 'Devs.'
  },
  {
    fullTerm: 'director',
    abbTerm: 'Dir.',
    plTerm: 'Dirs.'
  },
  {
    fullTerm: 'distributor',
    abbTerm: 'Distrib.',
    plTerm: 'Distribs.'
  },
  {
    fullTerm: 'distribution',
    abbTerm: 'Distrib.',
    plTerm: 'Distribs.'
  },
  {
    fullTerm: 'distributing',
    abbTerm: 'Distrib.',
    plTerm: 'Distribs.'
  },
  {
    fullTerm: 'district',
    abbTerm: 'Dist.',
    plTerm: 'Dists.'
  },
  {
    fullTerm: 'division',
    abbTerm: 'Div.',
    plTerm: 'Divs.'
  },
  {
    fullTerm: 'doing business as',
    abbTerm: 'd.b.a.',
    plTerm: userInput
  },
  {
    fullTerm: 'east',
    abbTerm: 'E.',
    plTerm: 'Es.'
  },
  {
    fullTerm: 'eastern',
    abbTerm: 'E.',
    plTerm: 'Es.'
  },
  {
    fullTerm: 'education',
    abbTerm: 'Edn.',
    plTerm: 'Edns.'
  },
  {
    fullTerm: 'electric',
    abbTerm: 'Elec.',
    plTerm: 'Elecs.'
  },
  {
    fullTerm: 'electrical',
    abbTerm: 'Elec.',
    plTerm: 'Elecs.'
  },
  {
    fullTerm: 'employee',
    abbTerm: 'Emp.',
    plTerm: 'Emps.'
  },
  {
    fullTerm: 'employer',
    abbTerm: 'Emp.',
    plTerm: 'Emps.'
  },
  {
    fullTerm: 'employment',
    abbTerm: 'Emp.',
    plTerm: 'Emps.'
  },
  {
    fullTerm: 'engineering',
    abbTerm: 'Eng.',
    plTerm: 'Engs.'
  },
  {
    fullTerm: 'enterprise',
    abbTerm: 'Ent.',
    plTerm: 'Ents.'
  },
  {
    fullTerm: 'equipment',
    abbTerm: 'Equip.',
    plTerm: 'Equips.'
  },
  {
    fullTerm: 'executor',
    abbTerm: 'Exr.',
    plTerm: 'Exrs.'
  },
  {
    fullTerm: 'federal',
    abbTerm: 'Fed.',
    plTerm: 'Feds.'
  },
  {
    fullTerm: 'federation',
    abbTerm: 'Fedn.',
    plTerm: 'Fedns.'
  },
  {
    fullTerm: 'fidelity',
    abbTerm: 'Fid.',
    plTerm: userInput
  },
  {
    fullTerm: 'finance',
    abbTerm: 'Fin.',
    plTerm: 'Fins.'
  },
  {
    fullTerm: 'financial',
    abbTerm: 'Fin.',
    plTerm: 'Fins.'
  },
  {
    fullTerm: 'footnote',
    abbTerm: 'fn.',
    plTerm: 'fns.'
  },
  {
    fullTerm: 'formerly known as',
    abbTerm: 'f.k.a.',
    plTerm: userInput
  },
  {
    fullTerm: 'foundation',
    abbTerm: 'Found.',
    plTerm: 'Founds.'
  },
  {
    fullTerm: 'general',
    abbTerm: 'Gen.',
    plTerm: 'Gens.'
  },
  {
    fullTerm: 'government',
    abbTerm: 'Govt.',
    plTerm: 'Govts.'
  },
  {
    fullTerm: 'guaranty',
    abbTerm: 'Guar.',
    plTerm: userInput
  },
  {
    fullTerm: 'guarantee',
    abbTerm: 'Guar.',
    plTerm: 'Guars.'
  },
  {
    fullTerm: 'guardian',
    abbTerm: 'Grdn.',
    plTerm: 'Grdns.'
  },
  {
    fullTerm: 'heights',
    abbTerm: 'Hts.',
    plTerm: userInput
  },
  {
    fullTerm: 'highway',
    abbTerm: 'Hwy.',
    plTerm: 'Hwys.'
  },
  {
    fullTerm: 'hospital',
    abbTerm: 'Hosp.',
    plTerm: 'Hosps.'
  },
  {
    fullTerm: 'housing',
    abbTerm: 'Hous.',
    plTerm: 'Hous.'
  },
  {
    fullTerm: 'illuminating',
    abbTerm: 'Illum.',
    plTerm: 'Illums.'
  },
  {
    fullTerm: 'incorporated',
    abbTerm: 'Inc.',
    plTerm: 'Incs.'
  },
  {
    fullTerm: 'indemnity',
    abbTerm: 'Indemn.',
    plTerm: userInput
  },
  {
    fullTerm: 'independent',
    abbTerm: 'Indep.',
    plTerm: 'Indeps.'
  },
  {
    fullTerm: 'industrial',
    abbTerm: 'Indus.',
    plTerm: userInput
  },
  {
    fullTerm: 'institute',
    abbTerm: 'Inst.',
    plTerm: 'Insts.'
  },
  {
    fullTerm: 'institution',
    abbTerm: 'Inst.',
    plTerm: 'Insts.'
  },
  {
    fullTerm: 'insurance',
    abbTerm: 'Ins.',
    plTerm: 'Ins.'
  },
  {
    fullTerm: 'in the matter of',
    abbTerm: 'In re',
    plTerm: userInput
  },
  {
    fullTerm: 'international',
    abbTerm: 'Internatl.',
    plTerm: 'Internatls.'
  },
  {
    fullTerm: 'investment',
    abbTerm: 'Invest.',
    plTerm: 'Invests.'
  },
  {
    fullTerm: 'liability',
    abbTerm: 'Liab.',
    plTerm: userInput
  },
  {
    fullTerm: 'limited',
    abbTerm: 'Ltd.',
    plTerm: 'Ltds.'
  },
  {
    fullTerm: 'machinery',
    abbTerm: 'Mach.',
    plTerm: userInput
  },
  {
    fullTerm: 'management',
    abbTerm: 'Mgt.',
    plTerm: 'Mgts.'
  },
  {
    fullTerm: 'manager',
    abbTerm: 'Mgr.',
    plTerm: 'Mgrs.'
  },
  {
    fullTerm: 'manufacturer',
    abbTerm: 'Mfr.',
    plTerm: 'Mfrs.'
  },
  {
    fullTerm: 'manufacturing',
    abbTerm: 'Mfg.',
    plTerm: 'Mfgs.'
  },
  {
    fullTerm: 'market',
    abbTerm: 'Mkt.',
    plTerm: 'Mkts.'
  },
  {
    fullTerm: 'medical',
    abbTerm: 'Med.',
    plTerm: 'Meds.'
  },
  {
    fullTerm: 'memorial',
    abbTerm: 'Mem.',
    plTerm: 'Mems.'
  },
  {
    fullTerm: 'metropolitan',
    abbTerm: 'Metro.',
    plTerm: 'Metros.'
  },
  {
    fullTerm: 'mount',
    abbTerm: 'Mt.',
    plTerm: 'Mts.'
  },
  {
    fullTerm: 'mortgage',
    abbTerm: 'Mtge.',
    plTerm: 'Mtges.'
  },
  {
    fullTerm: 'municipal',
    abbTerm: 'Mun.',
    plTerm: 'Muns.'
  },
  {
    fullTerm: 'mutual',
    abbTerm: 'Mut.',
    plTerm: 'Muts.'
  },
  {
    fullTerm: 'national',
    abbTerm: 'Natl.',
    plTerm: 'Natls.'
  },
  {
    fullTerm: 'north',
    abbTerm: 'N.',
    plTerm: test
  },
  {
    fullTerm: 'northern',
    abbTerm: 'N.',
    plTerm: 'Ns.'
  },
  {
    fullTerm: 'now known as',
    abbTerm: 'n.k.a.',
    plTerm: userInput
  },
  {
    fullTerm: 'number',
    abbTerm: 'No.',
    plTerm: 'Nos.'
  },
  {
    fullTerm: 'organization',
    abbTerm: 'Org.',
    plTerm: 'Orgs.'
  },
  {
    fullTerm: 'product',
    abbTerm: 'Prod.',
    plTerm: 'Prods.'
  },
  {
    fullTerm: 'production',
    abbTerm: 'Prod.',
    plTerm: 'Prods.'
  },
  {
    fullTerm: 'proseucting Attorney',
    abbTerm: 'Pros. Atty.',
    plTerm: 'Pros Attys.'
  },
  {
    fullTerm: 'psychiatric',
    abbTerm: 'Psych.',
    plTerm: 'Psychs.'
  },
  {
    fullTerm: 'public',
    abbTerm: 'Pub.',
    plTerm: 'Pubs.'
  },
  {
    fullTerm: 'railroad',
    abbTerm: 'RR.',
    plTerm: 'RRs.'
  },
  {
    fullTerm: 'railway',
    abbTerm: 'Ry.',
    plTerm: 'Rys.'
  },
  {
    fullTerm: 'refrigeration',
    abbTerm: 'Refrig.',
    plTerm: 'Refrigs.'
  },
  {
    fullTerm: 'rehabilitation',
    abbTerm: 'Rehab.',
    plTerm: 'Rehabs.'
  },
  {
    fullTerm: 'reserve',
    abbTerm: 'Res.',
    plTerm: 'Res.'
  },
  {
    fullTerm: 'review',
    abbTerm: 'Rev.',
    plTerm: 'Revs.'
  },
  {
    fullTerm: 'road',
    abbTerm: 'Rd.',
    plTerm: 'Rds.'
  },
  {
    fullTerm: 'sanitary',
    abbTerm: 'Sanit.',
    plTerm: 'Sanits.'
  },
  {
    fullTerm: 'saving',
    abbTerm: 'Sav.',
    plTerm: 'Savs.'
  },
  {
    fullTerm: 'savings & Loan',
    abbTerm: 'S. & L.',
    plTerm: 'S. & L.'
  },
  {
    fullTerm:'secretary',
    abbTerm: 'Secy.',
    plTerm: userInput
  },
  {
    fullTerm: 'security',
    abbTerm: 'Sec.',
    plTerm: userInput
  },
  {
    fullTerm: 'service',
    abbTerm: 'Serv.',
    plTerm: 'Servs.'
  },
  {
    fullTerm: 'south',
    abbTerm: 'S.',
    plTerm: userInput
  },
  {
    fullTerm: 'southern',
    abbTerm: 'S.',
    plTerm: userInput
  },
  {
    fullTerm: 'standard',
    abbTerm: 'Std.',
    plTerm: 'Stds.'
  },
  {
    fullTerm: 'street',
    abbTerm: 'St.',
    plTerm: 'Sts.'
  },
  {
    fullTerm: 'surety',
    abbTerm: 'Sur.',
    plTerm: userInput
  },
  {
    fullTerm: 'system',
    abbTerm: 'Sys.',
    plTerm: 'Sys.'
  },
  {
    fullTerm: 'telegraph',
    abbTerm: 'Tel.',
    plTerm: 'Tels.'
  },
  {
    fullTerm: 'telephone',
    abbTerm: 'Tel.',
    plTerm: 'Tels.'
  },
  {
    fullTerm: 'township',
    abbTerm: 'Twp.',
    plTerm: 'Twps.'
  },
  {
    fullTerm: 'transmission',
    abbTerm: 'Transm.',
    plTerm: 'Transms.'
  },
  {
    fullTerm: 'transportation',
    abbTerm: 'Transp.',
    plTerm: 'Transps.'
  },
  {
    fullTerm: 'unemployment',
    abbTerm: 'Unemp.',
    plTerm: 'Unemps.'
  },
  {
    fullTerm: 'university',
    abbTerm: 'Univ.',
    plTerm: userInput
  },
  {
    fullTerm: 'utilities',
    abbTerm: 'Util.',
    plTerm: userInput
  },
  {
    fullTerm: 'west',
    abbTerm: 'W.',
    plTerm: userInput
  },
  {
    fullTerm: 'western',
    abbTerm: 'W.',
    plTerm: userInput
  } 
]

let abbreviation = false;
let plural = false;

for (let i = 0; i < caseName.length; i++) {
  if (test === caseName[i].fullTerm) {
    console.log(caseName[i].abbTerm);
    abbreviation = true;
  } else if (test === (caseName[i].fullTerm + "s")) {
    console.log(caseName[i].plTerm);
    plural = true;
  }
}

if (!(abbreviation || plural)) {
  console.log(test);
}
