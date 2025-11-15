import { loadSidebar } from "./sidebar.js";
loadSidebar("penal");

const penalCodes = [
  {
    "code": "P.C. 2.1.1",
    "title": "Possession of Cocaine in Small Quantities",
    "fine": "$10,000 + Confiscation",
    "jail": "-",
    "class": "-",
    "stars": "-",
    "notes": "Possession of no more than four (4)  units of cocaine."
  },
  {
    "code": "P.C. 2.1.2",
    "title": "Possession of Cocaine in Moderate Quantities",
    "fine": "$30,000 + Confiscation",
    "jail": "-",
    "class": "-",
    "stars": "-",
    "notes": "Between 5 to 8 units of cocaine (5-8)"
  },
  {
    "code": "P.C. 2.1.3",
    "title": "Possession of Cocaine with Intent to Supply",
    "fine": "$55,000 + Confiscation",
    "jail": "30 months",
    "class": "Felony \n(Class D)",
    "stars": "\u2b50\u2b50",
    "notes": "Possession of more than eight (8)  units of cocaine."
  },
  {
    "code": "P.C. 2.2.1",
    "title": "Possession of Cannabis in Small Quantities",
    "fine": "$8,000 + Confiscation",
    "jail": "-",
    "class": "-",
    "stars": "-",
    "notes": "Possession of no more than ten (10)  units of cannabis."
  },
  {
    "code": "P.C. 2.2.2",
    "title": "Possession of Cannabis in Moderate Quantities",
    "fine": "$30,000 + Confiscation",
    "jail": "-",
    "class": "-",
    "stars": "-",
    "notes": "Possession of eleven (11) or more  units of cannabis."
  },
  {
    "code": "P.C. 2.2.3",
    "title": "Possession of Cannabis with Intent to Supply",
    "fine": "$55,000 + Confiscation",
    "jail": "30 months",
    "class": "Felony \n(Class D)",
    "stars": "\u2b50\u2b50",
    "notes": "Selling any quantity of cannabis"
  },
  {
    "code": "P.C. 2.2.4",
    "title": "Cultivation of Cannabis in Small Quantities",
    "fine": "$20,000 + Confiscation",
    "jail": "15 months",
    "class": "Felony \n(Class E)",
    "stars": "\u2b50",
    "notes": "Cultivating five (5) or fewer units of cannabis."
  },
  {
    "code": "P.C. 2.2.5",
    "title": "Cultivation of Cannabis in Large Quantities",
    "fine": "$40,000 + Confiscation",
    "jail": "45 months",
    "class": "Felony \n(Class C)",
    "stars": "\u2b50\u2b50\u2b50",
    "notes": "Cultivating six (6) or more units of cannabis."
  },
  {
    "code": "P.C. 2.3",
    "title": "Usage of Illicit Substances in Public",
    "fine": "$15,000 + Confiscation",
    "jail": "-",
    "class": "-",
    "stars": "-",
    "notes": "Consuming cocaine or cannabis in a public place."
  },
  {
    "code": "P.C. 2.4.1",
    "title": "Possession of Prohibited Items in Small Quantities",
    "fine": "$15,000 + Confiscation",
    "jail": "-",
    "class": "Infraction\n(Class A)",
    "stars": "-",
    "notes": "Possessing no more than three (3) units of any prohibited item."
  },
  {
    "code": "P.C. 2.4.2",
    "title": "Possession of Prohibited Items in Large Quantities",
    "fine": "$20,000 + Confiscation",
    "jail": "30 months",
    "class": "Felony\n(Class D)",
    "stars": "\u2b50\u2b50",
    "notes": "Possessing more than three (3) units of any prohibited item."
  },
  {
    "code": "P.C. 2.4.3",
    "title": "Sale of Prohibited Items in Public Shops",
    "fine": "$30,000 + Confiscation",
    "jail": "45 months",
    "class": "Felony\n(Class C)",
    "stars": "\u2b50\u2b50\u2b50",
    "notes": "Selling any prohibited item in a public shop."
  },
  {
    "code": "P.C. 2.5.1",
    "title": "Carrying Without a License",
    "fine": "$20,000 + Confiscation",
    "jail": "-",
    "class": "Infraction\n(Class A)",
    "stars": "-",
    "notes": "Carrying weapons without the proper license."
  },
  {
    "code": "P.C. 2.5.2",
    "title": "Overcarrying",
    "fine": "$20,000 + Confiscation",
    "jail": "30 months",
    "class": "Felony\n(Class D)",
    "stars": "\u2b50\u2b50",
    "notes": "Exceeding the carrying limit as  defined in the Gun Law."
  },
  {
    "code": "P.C. 2.5.3",
    "title": "Open Carrying",
    "fine": "$15,000 + Confiscation + Revocation of gun license",
    "jail": "30 months",
    "class": "Felony\n(Class D)",
    "stars": "\u2b50\u2b50",
    "notes": "Publicly displaying any object typically  used to harm others."
  },
  {
    "code": "P.C. 2.5.4",
    "title": "Possession of a Prohibited Weapon",
    "fine": "$15,000 + Confiscation",
    "jail": "30 months",
    "class": "Felony\n(Class D)",
    "stars": "\u2b50\u2b50",
    "notes": "Possessing one (1) weapon of prohibited origin."
  },
  {
    "code": "P.C. 2.5.5",
    "title": "Possession of Multiple Prohibited Weapons",
    "fine": "$30,000 + Confiscation",
    "jail": "45 months",
    "class": "Felony\n(Class C)",
    "stars": "\u2b50\u2b50\u2b50",
    "notes": "Possessing two (2) or more weapons of prohibited origin."
  },
  {
    "code": "P.C. 2.5.6",
    "title": "Brandishing of a Weapon",
    "fine": "$25,000 + Confiscation + Revocation of gun license",
    "jail": "45 months",
    "class": "Felony\n(Class C)",
    "stars": "\u2b50\u2b50\u2b50",
    "notes": "Publicly displaying or using a weapon with the intent to scare (aiming at someone, shooting in the air etc.)"
  },
  {
    "code": "P.C. 2.5.7",
    "title": "Possession of State-Issued Articles",
    "fine": "$40,000 + Confiscation",
    "jail": "45 months",
    "class": "Felony\n(Class C)",
    "stars": "\u2b50\u2b50\u2b50",
    "notes": "Possessing state-issued weaponry or unique equipment"
  },
  {
    "code": "P.C. 2.5.8",
    "title": "Discharging a Weapon in a Public Place",
    "fine": "$15,000 + Confiscation + Revocation of gun license",
    "jail": "15 months",
    "class": "Felony\n(Class E)",
    "stars": "\u2b50",
    "notes": "Firing any weapon in a public area."
  },
  {
    "code": "P.C. 2.6.1",
    "title": "Non-lethal Battery",
    "fine": "$10,000",
    "jail": "15 months",
    "class": "Felony\n(Class E)",
    "stars": "\u2b50",
    "notes": "Intentional infliction of bodily harm without the use of firearms"
  },
  {
    "code": "P.C. 2.6.2",
    "title": "Manslaughter",
    "fine": "$20,000",
    "jail": "45 months",
    "class": "Felony\n(Class C)",
    "stars": "\u2b50\u2b50\u2b50",
    "notes": "Unintentionally causing the death of another person."
  },
  {
    "code": "P.C. 2.6.3",
    "title": "Assault by Threat",
    "fine": "$20,000",
    "jail": "45 months",
    "class": "Felony\n(Class C)",
    "stars": "\u2b50\u2b50\u2b50",
    "notes": "Verbal threats where there is a likelihood of the threat being carried out."
  },
  {
    "code": "P.C. 2.6.4",
    "title": "Attempted Murder",
    "fine": "$35,000",
    "jail": "75 months",
    "class": "Felony\n(Class A)",
    "stars": "\u2b50\u2b50\u2b50\u2b50\u2b50",
    "notes": "Attempting to murder another person either directly or indirectly."
  },
  {
    "code": "P.C. 2.6.5",
    "title": "Murder Through Hostile Action",
    "fine": "$35,000",
    "jail": "60 months",
    "class": "Felony\n(Class B)",
    "stars": "\u2b50\u2b50\u2b50\u2b50",
    "notes": "Intentionally killing another person without prior planning."
  },
  {
    "code": "P.C. 2.6.6",
    "title": "Rape / Sexual Assault",
    "fine": "$55,000",
    "jail": "75 months",
    "class": "Felony\n(Class A)",
    "stars": "\u2b50\u2b50\u2b50\u2b50\u2b50",
    "notes": "Committing sexual acts through  intercourse or penetration against  the person\u2019s will."
  },
  {
    "code": "P.C. 2.7.1",
    "title": "Failure to Act",
    "fine": "$10,000",
    "jail": "15 months",
    "class": "Felony\n(Class E)",
    "stars": "\u2b50",
    "notes": "Abandoning a person in life-threatening danger who cannot help themselves."
  },
  {
    "code": "P.C. 2.7.2",
    "title": "Refusal of Duty to Act",
    "fine": "Dismissal from the org",
    "jail": "45 months",
    "class": "Felony\n(Class C)",
    "stars": "\u2b50\u2b50\u2b50",
    "notes": "A civil servant refusing to act in the best interest of the public."
  },
  {
    "code": "P.C. 2.7.3",
    "title": "Failure to Act by a Civil Servant",
    "fine": "Dismissal from the org",
    "jail": "45 months",
    "class": "Felony\n(Class C)",
    "stars": "\u2b50\u2b50\u2b50",
    "notes": "A civil servant abandoning a person in life-threatening danger."
  },
  {
    "code": "P.C. 2.7.4",
    "title": "Negligence I",
    "fine": "$35,000",
    "jail": "45 months",
    "class": "Felony\n(Class C)",
    "stars": "\u2b50\u2b50\u2b50",
    "notes": "A public servant\u2019s dishonest or negligent  behavior leading to significant violations  of citizens\u2019 rights,  organizational interests,  or government interests."
  },
  {
    "code": "P.C. 2.7.4.1",
    "title": "Negligence II",
    "fine": "$40,000",
    "jail": "30 months",
    "class": "Felony\n(Class D)",
    "stars": "\u2b50\u2b50",
    "notes": "A public servant\u2019s dishonest or negligent behavior leading to minor violations or no injury."
  },
  {
    "code": "P.C. 2.8.1",
    "title": "Kidnapping",
    "fine": "$35,000",
    "jail": "60 months",
    "class": "Felony\n(Class B)",
    "stars": "\u2b50\u2b50\u2b50\u2b50",
    "notes": "Abduction and unlawful confinement of a person against their will."
  },
  {
    "code": "P.C. 2.8.2",
    "title": "Taking a Hostage",
    "fine": "$50,000",
    "jail": "60 months",
    "class": "Felony\n(Class B)",
    "stars": "\u2b50\u2b50\u2b50\u2b50",
    "notes": "Holding a person as security for the fulfillment of a condition."
  },
  {
    "code": "P.C. 2.8.3",
    "title": "Unlawful Detention",
    "fine": "$20,000",
    "jail": "45 months",
    "class": "Felony\n(Class C)",
    "stars": "\u2b50\u2b50\u2b50",
    "notes": "Depriving an individual of their freedom without legal justification or authority."
  },
  {
    "code": "P.C. 2.9.1",
    "title": "Disorderly Conduct",
    "fine": "$20,000",
    "jail": "15 months",
    "class": "Felony\n(Class E)",
    "stars": "\u2b50",
    "notes": "Engaging in conduct that disturbs the peace, morals, or safety of the public or a specific group."
  },
  {
    "code": "P.C. 2.9.2",
    "title": "Street Harassment",
    "fine": "$15,000",
    "jail": "30 months",
    "class": "Felony\n(Class D)",
    "stars": "\u2b50\u2b50",
    "notes": "Making rude, derogatory, or unwelcome verbal comments, whistles, or any form of verbal interaction."
  },
  {
    "code": "P.C. 2.9.3",
    "title": "Sexual Harassment",
    "fine": "$32,000",
    "jail": "45 months",
    "class": "Felony\n(Class C)",
    "stars": "\u2b50\u2b50\u2b50",
    "notes": "Making unwelcome sexual advances, requests for sexual favors, or other verbal or physical harassment of a sexual nature."
  },
  {
    "code": "P.C. 2.9.4",
    "title": "Stalking",
    "fine": "$36,000",
    "jail": "60 months",
    "class": "Felony\n(Class B)",
    "stars": "\u2b50\u2b50\u2b50\u2b50",
    "notes": "Repeatedly following or harassing another person, causing reasonable fear of injury or death."
  },
  {
    "code": "P.C. 2.9.5",
    "title": "Hooliganism",
    "fine": "$15,000",
    "jail": "45 months",
    "class": "Felony\n(Class C)",
    "stars": "\u2b50\u2b50\u2b50",
    "notes": "Causing a tumultuous disturbance of the public peace."
  },
  {
    "code": "P.C. 2.9.6",
    "title": "Rioting",
    "fine": "$40,000",
    "jail": "45 months",
    "class": "Felony\n(Class C)",
    "stars": "\u2b50\u2b50\u2b50",
    "notes": "Engaging in a tumultuous disturbance of the public peace by three or more persons acting with a common intent."
  },
  {
    "code": "P.C. 2.9.7",
    "title": "Violation of Regulations for a Meeting, Rally, Public Event, or Protest I",
    "fine": "$25,000",
    "jail": "45 months",
    "class": "Felony\n(Class C)",
    "stars": "\u2b50\u2b50\u2b50",
    "notes": "Engaging in a public event or meeting that leads to law violations, disruption of peace, or property damage."
  },
  {
    "code": "P.C. 2.9.7.1",
    "title": "Violation of Regulations for a Meeting, Rally, Public Event, or Protest II",
    "fine": "$35,000",
    "jail": "60 months",
    "class": "Felony\n(Class B)",
    "stars": "\u2b50\u2b50\u2b50\u2b50",
    "notes": "Engaging in the conduct described in \u00a72.9.7 involving the use of weapons."
  },
  {
    "code": "P.C. 2.9.7.2",
    "title": "Violation of Regulations for a Meeting, Rally, Public Event, or Protest III",
    "fine": "$45,000",
    "jail": "75 months",
    "class": "Felony\n(Class A)",
    "stars": "\u2b50\u2b50\u2b50\u2b50\u2b50",
    "notes": "Engaging in the conduct described in \u00a72.9.7 and \u00a72.9.7.1 that results in serious injury or death."
  },
  {
    "code": "P.C. 2.9.8",
    "title": "Spreading of Disease",
    "fine": "$15,000",
    "jail": "-",
    "class": "nan",
    "stars": "-",
    "notes": "Intentionally transferring bacteria, viruses, or other germs to another person."
  },
  {
    "code": "P.C. 2.9.9",
    "title": "Indecent Exposure",
    "fine": "$20,000",
    "jail": "30 months",
    "class": "Felony\n(Class D)",
    "stars": "\u2b50\u2b50",
    "notes": "Intentionally exposing part of one\u2019s body in a place where such exposure is considered offensive to public decency."
  },
  {
    "code": "P.C. 2.9.10",
    "title": "Provoking",
    "fine": "$18,000",
    "jail": "30 months",
    "class": "Felony\n(Class D)",
    "stars": "\u2b50\u2b50",
    "notes": "Inducing someone to act or react by  deliberately annoying or harassing them."
  },
  {
    "code": "P.C. 2.9.11",
    "title": "Defamation of Character",
    "fine": "$50,000",
    "jail": "45 months",
    "class": "Felony\n(Class C)",
    "stars": "\u2b50\u2b50\u2b50",
    "notes": "Damaging another person\u2019s reputation through slander or libel."
  },
  {
    "code": "P.C. 2.9.11.1",
    "title": "Assault of a Senior/Elderly Citizen",
    "fine": "$50,000",
    "jail": "75 months",
    "class": "Felony      (Class A)",
    "stars": "\u2b50\u2b50\u2b50\u2b50\u2b50",
    "notes": "The threat to cause bodily harm or the actual bodily harm to an elderly or senior citizen."
  },
  {
    "code": "P.C. 2.9.12",
    "title": "Complicity I",
    "fine": "$40,000",
    "jail": "45 months",
    "class": "Felony\n(Class C)",
    "stars": "\u2b50\u2b50\u2b50",
    "notes": "Assisting another person in committing a crime, even if the actions differ from the crime itself."
  },
  {
    "code": "P.C. 2.9.13",
    "title": "Complicity II",
    "fine": "$25,000",
    "jail": "30 months",
    "class": "Felony\n(Class D)",
    "stars": "\u2b50\u2b50",
    "notes": "Failure to report or attempt to report a crime to the authorities, making one an accomplice."
  },
  {
    "code": "P.C. 2.10.1",
    "title": "Document Forgery",
    "fine": "$36,000",
    "jail": "45 months",
    "class": "Felony\n(Class C)",
    "stars": "\u2b50\u2b50\u2b50",
    "notes": "Creating a false document to give the appearance of legal validity to an untrue fact."
  },
  {
    "code": "P.C. 2.10.2",
    "title": "Looting of an Automated Teller Machine (ATM)",
    "fine": "$15,000",
    "jail": "30 months",
    "class": "Felony\n(Class D)",
    "stars": "\u2b50\u2b50",
    "notes": "Unlawfully taking money from an ATM without significant bodily harm to any party involved."
  },
  {
    "code": "P.C. 2.10.3",
    "title": "Theft of Property",
    "fine": "$20,000",
    "jail": "45 months",
    "class": "Felony\n(Class C)",
    "stars": "\u2b50\u2b50\u2b50",
    "notes": "Taking property from another without consent, through non-violent means."
  },
  {
    "code": "P.C. 2.10.4",
    "title": "Fraud",
    "fine": "$30,000",
    "jail": "45 months",
    "class": "Felony\n(Class C)",
    "stars": "\u2b50\u2b50\u2b50",
    "notes": "Deliberate acts intended to obtain unauthorized benefits through deception or false representations."
  },
  {
    "code": "P.C. 2.10.5",
    "title": "Grand Theft Auto",
    "fine": "$32,000",
    "jail": "45 months",
    "class": "Felony      (Class C)",
    "stars": "\u2b50\u2b50\u2b50",
    "notes": "Unlawfully commandeering another person\u2019s vehicle with the intent to permanently or significantly deprive them of it."
  },
  {
    "code": "P.C. 2.10.6",
    "title": "Robbery",
    "fine": "$38,000",
    "jail": "60 months",
    "class": "Felony      (Class B)",
    "stars": "\u2b50\u2b50\u2b50\u2b50",
    "notes": "Taking property from a person or place by force or threat."
  },
  {
    "code": "P.C. 2.10.7",
    "title": "False Advertisement",
    "fine": "$15,000",
    "jail": "-",
    "class": "Infraction\n(Class A)",
    "stars": "-",
    "notes": "Publicly distributing misleading or deceptive advertisements."
  },
  {
    "code": "P.C. 2.10.7.1",
    "title": "Illegal Advertisement",
    "fine": "$38,000",
    "jail": "-",
    "class": "Infraction\n(Class C)",
    "stars": "-",
    "notes": "Advertising on platforms not designated for advertisements (e.g., Club radio)."
  },
  {
    "code": "P.C. 2.11.1",
    "title": "Attempted Suicide",
    "fine": "Mandatory mental health screening",
    "jail": "-",
    "class": "Infraction\n(Class B)",
    "stars": "-",
    "notes": "Intentionally attempting to end  one\u2019s own life but failing to do so."
  },
  {
    "code": "P.C. 2.11.2",
    "title": "Conspiracy to Commit a Crime",
    "fine": "$20,000",
    "jail": "30 months",
    "class": "Felony      (Class D)",
    "stars": "\u2b50\u2b50",
    "notes": "Two or more individuals agreeing to engage in unlawful conduct with the intent to commit a crime."
  },
  {
    "code": "P.C. 2.11.3",
    "title": "Vandalism",
    "fine": "$23,000",
    "jail": "45 months",
    "class": "Felony      (Class C)",
    "stars": "\u2b50\u2b50\u2b50",
    "notes": "Deliberately damaging, destroying, defacing, or altering property without the owner\u2019s consent."
  },
  {
    "code": "P.C. 2.11.4",
    "title": "Illegal Fishing",
    "fine": "$10,000",
    "jail": "-",
    "class": "Infraction\n(Class B)",
    "stars": "-",
    "notes": "Fishing in restricted or prohibited areas, such as the pond in Mirror Park."
  },
  {
    "code": "P.C. 2.11.5",
    "title": "Breach of Contract",
    "fine": "Agreed sum detailed in the contract",
    "jail": "45 months",
    "class": "Felony      (Class C)",
    "stars": "\u2b50\u2b50\u2b50",
    "notes": "Breaching the terms of a signed contractual agreement."
  },
  {
    "code": "P.C. 3.1.1",
    "title": "Participation in Terrorism",
    "fine": "$50,000",
    "jail": "75 months",
    "class": "Felony      (Class A)",
    "stars": "\u2b50\u2b50\u2b50\u2b50\u2b50",
    "notes": "Directly or indirectly participating in actions involving violence and intimidation for political aims."
  },
  {
    "code": "P.C. 3.1.2",
    "title": "Terroristic Acts",
    "fine": "$50,000",
    "jail": "75 months",
    "class": "Felony      (Class A)",
    "stars": "\u2b50\u2b50\u2b50\u2b50\u2b50",
    "notes": "The unlawful use of violence and intimidation for political objectives."
  },
  {
    "code": "P.C. 3.1.3",
    "title": "Organization of Terrorism",
    "fine": "$75,000",
    "jail": "75 months",
    "class": "Felony      (Class A)",
    "stars": "\u2b50\u2b50\u2b50\u2b50\u2b50",
    "notes": "Recruiting individuals to join a political movement that uses terror to achieve its goals."
  },
  {
    "code": "P.C. 3.1.4",
    "title": "Leading a Terrorist Organization",
    "fine": "$100,000",
    "jail": "75 months",
    "class": "Felony      (Class A)",
    "stars": "\u2b50\u2b50\u2b50\u2b50\u2b50",
    "notes": "Providing guidance or leadership to a terrorist organization with political aims."
  },
  {
    "code": "P.C. 3.1.5",
    "title": "Formation of an Armed Group",
    "fine": "$40,000",
    "jail": "60 months",
    "class": "Felony      (Class B)",
    "stars": "\u2b50\u2b50\u2b50\u2b50",
    "notes": "Creating or participating in the development of a group with the intent to commit criminal activities."
  },
  {
    "code": "P.C. 3.1.6",
    "title": "Banditry",
    "fine": "$35,000",
    "jail": "60 months",
    "class": "Felony      (Class B)",
    "stars": "\u2b50\u2b50\u2b50\u2b50",
    "notes": "Engaging in organized crime involving threats of violence."
  },
  {
    "code": "P.C. 3.2",
    "title": "Obstruction of Justice",
    "fine": "$35,000",
    "jail": "45 months",
    "class": "Felony      (Class C)",
    "stars": "\u2b50\u2b50\u2b50",
    "notes": "Wilfully interfering with the justice process."
  },
  {
    "code": "P.C. 3.3",
    "title": "Attempted Seizure of Power / Treason",
    "fine": "$120,000",
    "jail": "75 months",
    "class": "Felony      (Class A)",
    "stars": "\u2b50\u2b50\u2b50\u2b50\u2b50",
    "notes": "Attempting to unlawfully seize power or aiding state enemies."
  },
  {
    "code": "P.C. 3.4.1",
    "title": "Trespassing on Private Property",
    "fine": "$15,000",
    "jail": "30 months",
    "class": "Felony      (Class D)",
    "stars": "\u2b50\u2b50",
    "notes": "Entering or loitering unlawfully on private land."
  },
  {
    "code": "P.C. 3.4.2",
    "title": "Trespassing on State Property",
    "fine": "$25,000",
    "jail": "45 months",
    "class": "Felony      (Class C)",
    "stars": "\u2b50\u2b50\u2b50",
    "notes": "Entering or loitering unlawfully on state property."
  },
  {
    "code": "P.C. 3.4.3",
    "title": "Breaking and Entering",
    "fine": "$25,000",
    "jail": "60 months",
    "class": "Felony      (Class B)",
    "stars": "\u2b50\u2b50\u2b50\u2b50",
    "notes": "Forcibly gaining unlawful access to  another's building."
  },
  {
    "code": "P.C. 3.5",
    "title": "Failure to Comply",
    "fine": "$35,000",
    "jail": "60 months",
    "class": "Felony      (Class B)",
    "stars": "\u2b50\u2b50\u2b50\u2b50",
    "notes": "Intentionally refusing to cooperate with lawful requests from state employees."
  },
  {
    "code": "P.C. 3.6",
    "title": "Failure to Identify",
    "fine": "$20,000",
    "jail": "30 months",
    "class": "Felony      (Class D)",
    "stars": "\u2b50\u2b50",
    "notes": "Intentionally refusing to provide state-issued identification upon lawful request."
  },
  {
    "code": "P.C. 3.7",
    "title": "Illegal Gambling",
    "fine": "$25,000",
    "jail": "30 months",
    "class": "Felony      (Class D)",
    "stars": "\u2b50\u2b50",
    "notes": "Participating in or organizing unauthorized gambling activities."
  },
  {
    "code": "P.C. 3.8.1",
    "title": "Impersonation of a Civil Servant",
    "fine": "$45,000",
    "jail": "30 months",
    "class": "Felony      (Class D)",
    "stars": "\u2b50\u2b50",
    "notes": "Unauthorized appropriation of powers  granted to a civil servant."
  },
  {
    "code": "P.C. 3.8.2",
    "title": "Impersonation of a Law Enforcement Officer",
    "fine": "$35,000",
    "jail": "45 months",
    "class": "Felony      (Class C)",
    "stars": "\u2b50\u2b50\u2b50",
    "notes": "Unauthorized appropriation of powers  granted to a law enforcement officer."
  },
  {
    "code": "P.C. 3.9",
    "title": "Battery of a Public Servant",
    "fine": "$15,000",
    "jail": "45 months",
    "class": "Felony      (Class C)",
    "stars": "\u2b50\u2b50\u2b50",
    "notes": "Intentional infliction of non-lethal bodily injury to a state employee."
  },
  {
    "code": "P.C. 3.10",
    "title": "Attempted Murder of a Public Servant",
    "fine": "$50,000",
    "jail": "75 months",
    "class": "Felony      (Class A)",
    "stars": "\u2b50\u2b50\u2b50\u2b50\u2b50",
    "notes": "Attempting to murder state or federal personnel."
  },
  {
    "code": "P.C. 3.11",
    "title": "False Reporting",
    "fine": "$20,000",
    "jail": "45 months",
    "class": "Felony      (Class C)",
    "stars": "\u2b50\u2b50\u2b50",
    "notes": "Knowingly alerting authorities with incorrect details or reporting non-existent incidents."
  },
  {
    "code": "P.C. 3.12",
    "title": "Illegal Acquisition of State Secrets",
    "fine": "$35,000",
    "jail": "60 months",
    "class": "Felony      (Class B)",
    "stars": "\u2b50\u2b50\u2b50\u2b50",
    "notes": "Acquiring state secrets through theft, deception, blackmail, or other illegal means."
  },
  {
    "code": "P.C. 3.13",
    "title": "Hiding or Destroying Evidence",
    "fine": "$40,000",
    "jail": "45 months",
    "class": "Felony      (Class C)",
    "stars": "\u2b50\u2b50\u2b50",
    "notes": "Attempting to hide or destroy  evidence of a crime."
  },
  {
    "code": "P.C. 3.14",
    "title": "Negligence in Communication",
    "fine": "$30,000",
    "jail": "45 months",
    "class": "Felony      (Class C)",
    "stars": "\u2b50\u2b50\u2b50",
    "notes": "A public servant\u2019s serious ethical or moral violation through destructive communication."
  },
  {
    "code": "P.C. 3.15.1",
    "title": "Breach of Electoral Silence",
    "fine": "$10,000",
    "jail": "30 months",
    "class": "Felony      (Class D)",
    "stars": "\u2b50\u2b50",
    "notes": "Campaigning within five hundred (500) meters of a voting booth during active voting."
  },
  {
    "code": "P.C. 3.15.2",
    "title": "Blocking a Voting Site",
    "fine": "$38,000",
    "jail": "60 months",
    "class": "Felony      (Class B)",
    "stars": "\u2b50\u2b50\u2b50\u2b50",
    "notes": "Intentionally blocking or limiting citizens\u2019 right to vote through threats or physical restraint."
  },
  {
    "code": "P.C. 3.15.3",
    "title": "Illegal Persuasion of Votes",
    "fine": "$40,000",
    "jail": "60 months",
    "class": "Felony      (Class B)",
    "stars": "\u2b50\u2b50\u2b50\u2b50",
    "notes": "Persuading citizens to vote a certain way through material benefits or favors."
  },
  {
    "code": "P.C. 3.16.1",
    "title": "Active Bribery",
    "fine": "$25,000",
    "jail": "45 months",
    "class": "Felony      (Class C)",
    "stars": "\u2b50\u2b50\u2b50",
    "notes": "Offering money or favors to influence a person in a position of trust."
  },
  {
    "code": "P.C. 3.16.2",
    "title": "Passive Bribery",
    "fine": "$50,000",
    "jail": "75 months",
    "class": "Felony      (Class A)",
    "stars": "\u2b50\u2b50\u2b50\u2b50\u2b50",
    "notes": "Accepting money or favors to influence the judgment or conduct of a person in a position of trust."
  },
  {
    "code": "P.C. 3.16.3",
    "title": "Quid Pro Quo",
    "fine": "$50,000 + dismissal",
    "jail": "75 months",
    "class": "Felony      (Class A)",
    "stars": "\u2b50\u2b50\u2b50\u2b50\u2b50",
    "notes": "Exchanging goods or services where one transfer is contingent upon the other."
  },
  {
    "code": "P.C. 3.17",
    "title": "Failure to Pay Fines",
    "fine": "$25,000",
    "jail": "45 months",
    "class": "Felony      (Class C)",
    "stars": "\u2b50\u2b50\u2b50",
    "notes": "Failure to pay fines imposed by law after committing an offense."
  },
  {
    "code": "P.C. 3.18.1",
    "title": "Evading Arrest",
    "fine": "$25,000",
    "jail": "45 months",
    "class": "Felony      (Class C)",
    "stars": "\u2b50\u2b50\u2b50",
    "notes": "Fleeing from a police officer attempting to arrest, detain, or investigate."
  },
  {
    "code": "P.C. 3.18.2",
    "title": "Assisting Evasion of Arrest",
    "fine": "$30,000",
    "jail": "45 months",
    "class": "Felony      (Class C)",
    "stars": "\u2b50\u2b50\u2b50",
    "notes": "Helping someone evade arrest."
  },
  {
    "code": "P.C. 3.19.1",
    "title": "Street Harassment Towards a Colleague",
    "fine": "$25,000 + dismissal",
    "jail": "30 months",
    "class": "Felony      (Class D)",
    "stars": "\u2b50\u2b50",
    "notes": "Rude or unwelcome comments,  whistles, or other sexual verbal  interactions towards a colleague."
  },
  {
    "code": "P.C. 3.19.2",
    "title": "Hostile Work Environment",
    "fine": "$50,000 + dmismissal",
    "jail": "45 months",
    "class": "Felony      (Class C)",
    "stars": "\u2b50\u2b50\u2b50",
    "notes": "Creating or supporting a work environment that is difficult or uncomfortable for others."
  },
  {
    "code": "P.C. 3.19.3",
    "title": "Sexual Harassment Towards a Colleague",
    "fine": "$50,000 + dismissal",
    "jail": "45 months",
    "class": "Felony      (Class C)",
    "stars": "\u2b50\u2b50\u2b50",
    "notes": "Unwelcome sexual advances or  harassment towards a colleague."
  },
  {
    "code": "P.C. 3.19.4",
    "title": "Absence Without Leave",
    "fine": "$50,000 + dismissal",
    "jail": "75 months",
    "class": "Felony      (Class A)",
    "stars": "\u2b50\u2b50\u2b50\u2b50\u2b50",
    "notes": "Being absent without authority from a place of duty in the armed forces."
  },
  {
    "code": "P.C. 3.19.5",
    "title": "Provoking a Public Servant",
    "fine": "$36,000",
    "jail": "30 months",
    "class": "Felony      (Class D)",
    "stars": "\u2b50\u2b50",
    "notes": "Inducing a state employee to act or react  as a result of deliberate harassment."
  },
  {
    "code": "P.C. 3.19.6",
    "title": "Tax Evasion",
    "fine": "Unpaid taxes but no more than 100k",
    "jail": "60 months",
    "class": "Felony      (Class B)",
    "stars": "\u2b50\u2b50\u2b50\u2b50",
    "notes": "Intentionally avoiding payment of  taxes owed to the government."
  },
  {
    "code": "P.C. 4.1",
    "title": "Exceeding Granted Powers I",
    "fine": "$45,000",
    "jail": "60 months",
    "class": "Felony      (Class B)",
    "stars": "\u2b50\u2b50\u2b50\u2b50",
    "notes": "Public servant conduct that goes beyond their powers and violates the rights and legitimate interests of citizens, organizations, or legally protected public or government interests."
  },
  {
    "code": "P.C. 4.1.2",
    "title": "Exceeding Granted Powers II",
    "fine": "$55,000",
    "jail": "75 months",
    "class": "Felony      (Class A)",
    "stars": "\u2b50\u2b50\u2b50\u2b50\u2b50",
    "notes": "The conduct described in \u00a74.1 if committed with: (a) The use of violence or a threat of its use; (b) The use of weaponry or special equipment; (c) Causing injury."
  },
  {
    "code": "P.C. 4.2",
    "title": "Ill-use of Granted Powers I",
    "fine": "$40,000",
    "jail": "60 months",
    "class": "Felony      (Class B)",
    "stars": "\u2b50\u2b50\u2b50\u2b50",
    "notes": "The misuse of public servant powers that contradict the organization's interests, leading to the violation of the rights and legitimate interests of citizens or organizations."
  },
  {
    "code": "P.C. 4.2.1",
    "title": "Ill-use of Granted Powers II",
    "fine": "$60,000",
    "jail": "75 months",
    "class": "Felony      (Class A)",
    "stars": "\u2b50\u2b50\u2b50\u2b50\u2b50",
    "notes": "Use of the powers granted to a public servant aiming to intervene or obstruct the process of detention or arrest, or an investigation."
  },
  {
    "code": "P.C. 4.2.2",
    "title": "Ill-use of Granted Powers III",
    "fine": "$75,000",
    "jail": "75 months",
    "class": "Felony      (Class A)",
    "stars": "\u2b50\u2b50\u2b50\u2b50\u2b50",
    "notes": "The conduct described in \u00a74.2.1 if committed by an employee of an organization or a division authorized to conduct investigations of malfeasance."
  },
  {
    "code": "P.C. 4.3",
    "title": "Disobeying an Order",
    "fine": "$25,000",
    "jail": "45 months",
    "class": "Felony      (Class C)",
    "stars": "\u2b50\u2b50\u2b50",
    "notes": "To refuse and/or fail to follow a lawful order given by their superior officer."
  },
  {
    "code": "P.C. 4.3.1",
    "title": "Failure to Comply with an Executive Order, Court Decision, or Legitimate Order I",
    "fine": "$35,000",
    "jail": "45 months",
    "class": "Felony      (Class C)",
    "stars": "\u2b50\u2b50\u2b50",
    "notes": "Non-compliance with a senior order  by a public servant, causing  significant violations of citizens'  rights, organizations' legitimate  interests, or government's legally  protected interests."
  },
  {
    "code": "P.C. 4.3.2",
    "title": "Failure to Comply with an Executive Order, Court Decision, or Legitimate Order II",
    "fine": "$45,000",
    "jail": "60 months",
    "class": "Felony      (Class B)",
    "stars": "\u2b50\u2b50\u2b50\u2b50",
    "notes": "Deliberate non-compliance by a  public servant with an order  from a leader or a deputy of  that organization, carried out in  compliance with the current  order and not contradicting the law."
  },
  {
    "code": "P.C. 4.3.3",
    "title": "Failure to Comply with an Executive Order, Court Decision, or Legitimate Order III",
    "fine": "$55,000",
    "jail": "75 months",
    "class": "Felony      (Class A)",
    "stars": "\u2b50\u2b50\u2b50\u2b50\u2b50",
    "notes": "Non-compliance by a public servant  with an executive order, a court order,  or any other legitimate order carried  out on behalf of the Department of  Justice of San-Andreas or the  Government."
  },
  {
    "code": "P.C. 4.4",
    "title": "Professional Misconduct",
    "fine": "$75,000",
    "jail": "75 months",
    "class": "Felony      (Class A)",
    "stars": "\u2b50\u2b50\u2b50\u2b50\u2b50",
    "notes": "Conducting oneself in a manner that is professionally unsuitable, potentially dangerous to patients, incompetent, disruptive, abusive, or illegal."
  },
  {
    "code": "P.C. 4.5",
    "title": "Sabotage",
    "fine": "$75,000",
    "jail": "75 months",
    "class": "Felony      (Class A)",
    "stars": "\u2b50\u2b50\u2b50\u2b50\u2b50",
    "notes": "Deliberately destroying and/or damaging weaponry, ammunition, goods, or items of state property, to hinder or halt any operation initiated by the state."
  },
  {
    "code": "P.C. 4.6",
    "title": "Espionage",
    "fine": "$75,000",
    "jail": "75 months",
    "class": "Felony      (Class A)",
    "stars": "\u2b50\u2b50\u2b50\u2b50\u2b50",
    "notes": "The crime of spying or secretly watching a person, company, government, etc., for the purpose of gathering secret information or detecting wrongdoing, and transferring such information to another organization or state."
  },
  {
    "code": "P.C. 4.7",
    "title": "Conduct Unbecoming",
    "fine": "$75,000",
    "jail": "75 months",
    "class": "Felony      (Class A)",
    "stars": "\u2b50\u2b50\u2b50\u2b50\u2b50",
    "notes": "Conduct on the part of a state employee that is contrary to the public interests and/or harms their standing in the profession in the eyes of the public."
  },
  {
    "code": "P.C. 4.8",
    "title": "Corruption",
    "fine": "$75,000",
    "jail": "75 months",
    "class": "Felony      (Class A)",
    "stars": "\u2b50\u2b50\u2b50\u2b50\u2b50",
    "notes": "Conducting oneself in a dishonest and/or  fraudulent manner by those residing in  power given by the state."
  },
  {
    "code": "P.C. 4.9",
    "title": "Disclosure of a State Secret",
    "fine": "$75,000",
    "jail": "75 months",
    "class": "Felony      (Class A)",
    "stars": "\u2b50\u2b50\u2b50\u2b50\u2b50",
    "notes": "Revealing state secrets through dishonest or  fraudulent behavior by those in positions of  power given by the state."
  },
  {
    "code": "P.C. 4.10",
    "title": "Violation of Radio Calls and Department Ethics Code",
    "fine": "$10,000 + potential suspension/bl",
    "jail": "-",
    "class": "nan",
    "stars": "-",
    "notes": "Inducing a state employee to charges for improper radio use and ethics breaches."
  },
  {
    "code": "P.C. 4.11",
    "title": "State Employee Promoting or Assisting in Illegal Activities",
    "fine": "Falls under \u00a74.8 with judge approval",
    "jail": "75 months",
    "class": "Felony      (Class A)",
    "stars": "\u2b50\u2b50\u2b50\u2b50\u2b50",
    "notes": "State employees involved in promoting or assisting illegal activities, such as using club radio for unlawful purposes (i.e., Club radio)."
  },
  {
    "code": "P.C. 4.12",
    "title": "Insulting a First Person",
    "fine": "-",
    "jail": "75 months",
    "class": "Felony      (Class A)",
    "stars": "\u2b50\u2b50\u2b50\u2b50\u2b50",
    "notes": "Anything that resembles or implies an allegation against a First person without compliance to immunity laws, shall be considered an attack against the most highest officials of the state."
  },
  {
    "code": "P.C. 5.1",
    "title": "Disobeying a Judicial Order",
    "fine": "$40,000",
    "jail": "60 months",
    "class": "Felony      (Class B)",
    "stars": "\u2b50\u2b50\u2b50\u2b50",
    "notes": "Refusing or failing to comply with a lawful order issued by the Governor, Attorney General, or members of the judiciary chambers."
  },
  {
    "code": "P.C. 5.2",
    "title": "Disruption of a Trial",
    "fine": "$25,000",
    "jail": "60 months",
    "class": "Felony      (Class B)",
    "stars": "\u2b50\u2b50\u2b50\u2b50",
    "notes": "Interfering with the orderly administration of justice, impairing the authority or dignity of the court, and/or disrupting the legal process within the courtroom."
  },
  {
    "code": "P.C. 5.3",
    "title": "Dishonoring a Judiciary Member",
    "fine": "$35,000",
    "jail": "60 months",
    "class": "Felony      (Class B)",
    "stars": "\u2b50\u2b50\u2b50\u2b50",
    "notes": "Dishonoring the position of a judicial officer during the performance or in relation to the previous performance of their official duties."
  },
  {
    "code": "P.C. 5.4",
    "title": "Contempt of Court",
    "fine": "$28,000",
    "jail": "60 months",
    "class": "Felony      (Class B)",
    "stars": "\u2b50\u2b50\u2b50\u2b50",
    "notes": "Disobeying a member of the judiciary chambers or otherwise failing to comply with an order of the court."
  },
  {
    "code": "P.C. 5.5",
    "title": "Ill-use of a Judicial Permit",
    "fine": "$25,000 + revocation",
    "jail": "60 months",
    "class": "Felony      (Class B)",
    "stars": "\u2b50\u2b50\u2b50\u2b50",
    "notes": "Misconduct through the improper use of a judicial permit issued by the Department of Justice, contrary to the legislative guidelines established by law."
  },
  {
    "code": "P.C. 5.6",
    "title": "Forged Evidence",
    "fine": "$20,000",
    "jail": "60 months",
    "class": "Felony      (Class B)",
    "stars": "\u2b50\u2b50\u2b50\u2b50",
    "notes": "Tampering with or forging evidence to  influence the outcome of a court case."
  },
  {
    "code": "P.C. 5.7",
    "title": "Perjury",
    "fine": "$23,000",
    "jail": "60 months",
    "class": "Felony      (Class B)",
    "stars": "\u2b50\u2b50\u2b50\u2b50",
    "notes": "Swearing a false oath or making a false affirmation to tell the truth, whether spoken or written, concerning matters material to an official proceeding."
  },
  {
    "code": "P.C. 6.1.1",
    "title": "Minor Speed Violation",
    "fine": "$13,000",
    "jail": "-",
    "class": "Infraction\n(Class C)",
    "stars": "-",
    "notes": "Speeding five (5) to thirty (30) kilometers per hour over the speed limit."
  },
  {
    "code": "P.C. 6.1.2",
    "title": "Mediocre Speed Violation",
    "fine": "$20,000",
    "jail": "-",
    "class": "Infraction\n(Class B)",
    "stars": "-",
    "notes": "Speeding thirty-one (31) to sixty (60) kilometers per hour over the speed limit."
  },
  {
    "code": "P.C. 6.1.3",
    "title": "Major Speed Violation",
    "fine": "$25,000 + revocation of license",
    "jail": "-",
    "class": "Infraction\n(Class A)",
    "stars": "-",
    "notes": "Speeding sixty-one (61) to ninety (90) kilometers per hour over the speed limit."
  },
  {
    "code": "P.C. 6.2",
    "title": "Jaywalking",
    "fine": "$10,000",
    "jail": "-",
    "class": "Infraction\n(Class C)",
    "stars": "-",
    "notes": "Crossing a street carelessly or illegally, endangering oneself with traffic."
  },
  {
    "code": "P.C. 6.3",
    "title": "Abandonment of a Vehicle",
    "fine": "$10,000",
    "jail": "-",
    "class": "Infraction\n(Class C)",
    "stars": "-",
    "notes": "Deliberately abandoning a vehicle in any public area or place where vehicles are not permitted."
  },
  {
    "code": "P.C. 6.4",
    "title": "Dangerous Transportation of People",
    "fine": "$10,000",
    "jail": "-",
    "class": "Infraction\n(Class C)",
    "stars": "-",
    "notes": "Transporting a person in an unsafe manner, where seatbelts and/or proper posture for crash safety regulations are not adhered to."
  },
  {
    "code": "P.C. 6.5",
    "title": "Reckless Driving",
    "fine": "$35,000",
    "jail": "30 months",
    "class": "Felony      (Class D)",
    "stars": "\u2b50\u2b50",
    "notes": "Operating a vehicle in willful or wanton disregard for the traffic code."
  },
  {
    "code": "P.C. 6.5.1",
    "title": "Injury by Dangerous Driving",
    "fine": "$25,000",
    "jail": "45 months",
    "class": "Felony      (Class C)",
    "stars": "\u2b50\u2b50\u2b50",
    "notes": "Driving a motor vehicle in a manner that is significantly below the standard expected of a competent and careful driver, causing injury to any person involved."
  },
  {
    "code": "P.C. 6.5.2",
    "title": "Death by Dangerous Driving",
    "fine": "$55,000",
    "jail": "60 months",
    "class": "Felony      (Class B)",
    "stars": "\u2b50\u2b50\u2b50\u2b50",
    "notes": "Driving a motor vehicle in a  manner that is significantly  below the standard expected of a  competent and careful driver,  resulting in the death of any  person involved."
  },
  {
    "code": "P.C. 6.6",
    "title": "Failure to Yield to an Emergency Service Vehicle",
    "fine": "$18,000",
    "jail": "15 months",
    "class": "Felony      (Class E)",
    "stars": "\u2b50",
    "notes": "Failing to grant the right of way or refusing to give priority to an approaching emergency vehicle displaying lights and/or sounding sirens."
  }
];

const container = document.getElementById("penalContainer");
const searchInput = document.getElementById("searchInput");

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
  const toast = document.createElement("div");
  toast.className = "copy-toast";
  toast.textContent = "Copied!";
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2000);
}

function renderCodes(data) {
  container.innerHTML = "";
  data.forEach(item => {
    const card = document.createElement("div");
    card.className = "code-card";
    const info = `
${item.code} - ${item.title}`;
    card.innerHTML = `
      <button class="copy-btn" title="Copy Code">📋 Copy</button>
      <h3>${item.code} - ${item.title}</h3>
      <div class="code-details">
        <span><strong>Fine:</strong> ${item.fine}</span>
        <span><strong>Jail:</strong> ${item.jail}</span>
        <span><strong>Class:</strong> ${item.class}</span>
        <span><strong>Stars:</strong> ${item.stars}</span>
      </div>
      <p class="code-notes">${item.notes}</p>
    `;

    card.querySelector(".copy-btn").addEventListener("click", () => copyToClipboard(info));
    container.appendChild(card);
  });
}

renderCodes(penalCodes);

searchInput.addEventListener("input", e => {
  const q = e.target.value.toLowerCase();
  const filtered = penalCodes.filter(i =>
    i.code.toLowerCase().includes(q) ||
    i.title.toLowerCase().includes(q) ||
    i.class.toLowerCase().includes(q)
  );
  renderCodes(filtered);
});
