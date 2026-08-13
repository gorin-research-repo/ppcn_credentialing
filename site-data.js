/* Shared data layer for the PeakPoint Central Nassau privileging guide.
   Loaded by both index.html (the provider-facing guide) and admin.html (the
   document inventory and change log) so the two pages can never disagree about
   which file is current or what version date it carries. Add or revise a
   document here once and both pages pick it up.

   Plain script, not a module, so the pages still work when opened directly
   from disk over file://. */

/* External files: DOPs in dops/, case logs in case-logs/, forms in forms/, logo in assets/. */
const DOP_BASE = "dops/";
const CASE_LOG_BASE = "case-logs/";
const FORMS_BASE = "forms/";
const PEAK_URL = "https://peak.mountsinai.org/";
const PEAK_LINK = '<a href="'+PEAK_URL+'" target="_blank" rel="noopener">PEAK / Mount Sinai intranet</a>';
const HEALTH_ASSESSMENT = "Annual_Health_Assessment.pdf";
const PHYSICAL_EXAM = "Physical_Examination_Form.pdf";

const DOP_FORM = {
  podiatry:"Podiatry_April_30_2026.pdf",
  urology:"Urology_May_6_2026_FINAL.pdf",
  gyn:"Gyn_May_6_2026_FINAL.pdf",
  pain:"Pain_Medicine_May_6_2026_FINAL.pdf",
  plastic:"Plastic_Surgery_May_6_2026_FINAL.pdf",
  ophthalmology:"Optho_May_6_2026_FINAL.pdf",
  ortho:"Ortho_May_6_2026.pdf",
  gen_surg:"Gen_Surg_May_6_2026_FINAL.pdf",
  gi:"GI_May_20_2026_FINAL.pdf",
  ent:"ENT_May_6_2026_FINAL.pdf",
  pa:"PA_Aug_4_2026.pdf",
  anesthesia_physician:"Anesthesia_Physician_May_18_2026_FINAL.pdf",
  anesthesia_crna:"Anesthesia_CRNA_May_18_2026_FINAL.pdf"
};

const CASE_LOG = {
  podiatry:"PODIATRY_CASE_LOG_TEMPLATE_July_8_2026.xlsx",
  urology:"UROLOGY_CASE_LOG_TEMPLATE_July_8_2026.xlsx",
  gyn:"GYNECOLOGY_CASE_LOG_TEMPLATE_July_8_2026.xlsx",
  pain:"PAIN_MEDICINE_CASE_LOG_TEMPLATE_July_8_2026.xlsx",
  plastic:"PLASTIC_SURGERY_CASE_LOG_TEMPLATE_July_8_2026.xlsx",
  ophthalmology:"OPHTHALMOLOGY_CASE_LOG_TEMPLATE_July_8_2026.xlsx",
  ortho:"ORTHOPEDICS_CASE_LOG_TEMPLATE_July_8_2026.xlsx",
  gen_surg:"GENERAL_SURGERY_CASE_LOG_TEMPLATE_July_8_2026.xlsx",
  gi:"GI_CASE_LOG_TEMPLATE_July_8_2026.xlsx",
  ent:"OTOLARYNGOLOGY_CASE_LOG_TEMPLATE_July_8_2026.xlsx",
  pa:"PA_CASE_LOG_TEMPLATE_August_13_2026.xlsx",
  anesthesia_physician:"ANESTHESIA_(PHYSICIAN)_CASE_LOG_TEMPLATE_July_8_2026.xlsx",
  anesthesia_crna:"ANESTHESIA_(CRNA)_CASE_LOG_TEMPLATE_July_8_2026.xlsx"
};

function assetLink(folder, file, text){
  if(!file) return text;
  return '<a href="'+folder+encodeURI(file)+'" target="_blank" rel="noopener">'+text+'</a>';
}

const COURSE = {
  fluoroscopy:{
    edu:"Approved residency or fellowship that included training in fluoroscopy and radiation-safety principles.",
    newLines:["Certificate of completion of the “Radiation Safety in Fluoroscopy for Operators” course ("+PEAK_LINK+"), or an MEC-approved equivalent, within 12 months of initial credentialing."],
    renLines:["Certificate of “Radiation Safety in Fluoroscopy for Operators” course completion ("+PEAK_LINK+") within 12 months of recredentialing."]
  },
  laser:{
    edu:"Approved residency in a specialty/subspecialty that included training in laser principles.",
    newLines:[
      "Certificate 1 — Laser Safety course (appropriate to your discipline), via "+PEAK_LINK+", within 12 months of initial credentialing.",
      "Certificate 2 — Surgical Fire Safety course (separate certificate), via "+PEAK_LINK+", within 12 months of initial credentialing.",
      "Or MEC-approved equivalents for both courses."
    ],
    renLines:[
      "Certificate 1 — Laser Safety course completion ("+PEAK_LINK+") within 12 months of recredentialing.",
      "Certificate 2 — Surgical Fire Safety course completion (separate certificate, "+PEAK_LINK+") within 12 months of recredentialing."
    ]
  },
  chemo:{
    edu:"Approved residency that included training in the administration of chemotherapy/biotherapy.",
    newLines:["Certificate of completion of the Mount Sinai Chemotherapy and Biotherapy Safety Course ("+PEAK_LINK+"), or an MEC-approved equivalent, within 12 months of initial credentialing."],
    renLines:["Certificate of Chemotherapy and Biotherapy Safety Course completion ("+PEAK_LINK+") within 12 months of recredentialing."]
  }
};
function courseBlock(name,key,extra){const c=COURSE[key];return {name,type:"course",edu:c.edu,newLines:c.newLines,renLines:c.renLines,special:extra||null};}

/* Course blocks for PAs use PA-form wording (meet general PA criteria). */
function paCourseBlock(name,key){
  const c=COURSE[key];
  return {
    name, type:"course",
    edu:"Applicant must meet the criteria for general PA privileges.",
    cert:"Applicant must meet the criteria for general PA privileges.",
    newLines:c.newLines, renLines:c.renLines
  };
}

const DATA = {
  podiatry:{
    label:"Podiatry", version:"April 30, 2026",
    blocks:[
      {name:"Podiatry — Core Privileges", type:"clinical", core:true, unit:"podiatric procedures",
        edu:"CPME-accredited 24-month podiatric surgical residency.",
        cert:"Board certification (or board-eligible, certified within 5 yrs of training) in foot surgery by ABFAS or the American Board of Podiatric Medicine. Maintenance of Certification required unless legacy.",
        trainAlt:"Completion of a CPME-accredited podiatric surgery residency within the past 12 months.",
        newMin:{n:25,m:12}, renMin:{n:75,m:36}},
      {name:"Standard Ankle Surgery", type:"clinical", unit:"standard ankle surgeries",
        edu:"Meet the criteria for core podiatry privileges.",
        special:"Must hold standard ankle surgery privileges granted by the State of New York.",
        trainAlt:"Completion of a CPME-accredited podiatric surgery residency within the past 12 months.",
        newMin:{n:2,m:12}, renMin:{n:6,m:36}, prereq:"core podiatry privileges"},
      {name:"Advanced Ankle Surgery", type:"clinical", unit:"advanced ankle surgeries",
        edu:"Meet the criteria for core podiatry privileges.",
        special:"Must hold advanced ankle surgery privileges granted by the State of New York.",
        trainAlt:"Completion of a CPME-accredited podiatric surgery residency within the past 12 months.",
        newMin:{n:5,m:12}, renMin:{n:15,m:36}, prereq:"core podiatry privileges"}
    ]
  },
  urology:{
    label:"Urology", version:"May 6, 2026",
    blocks:[
      {name:"Urology — Core Privileges", type:"clinical", core:true, unit:"urological procedures",
        edu:"ACGME- or AOA-accredited residency in urology.",
        cert:"Certification (or board-eligible, certified within 5 yrs) in urology by the American Board of Urology or the American Osteopathic Board of Surgery (Urological Surgery). MOC required unless legacy.",
        trainAlt:"Completion of an ACGME-/AOA-accredited residency or fellowship within the past 12 months.",
        newMin:{n:25,m:12}, renMin:{n:75,m:36}},
      {name:"Point of Care Ultrasound (POCUS)", type:"clinical", unit:"POCUS procedures",
        edu:"Approved residency/fellowship that included POCUS training; practice limited to documented POCUS procedures within the specialty.",
        trainAlt:"Completion of an ACGME-/AOA-accredited residency or fellowship within the past 12 months.",
        newMin:{n:5,m:12}, renMin:{n:15,m:36}, prereq:"core urology privileges"},
      courseBlock("Fluoroscopy","fluoroscopy"),
      courseBlock("Use of Laser","laser"),
      courseBlock("Administration of Chemotherapy and Biotherapy","chemo")
    ]
  },
  gyn:{
    label:"Gynecology", version:"May 6, 2026",
    blocks:[
      {name:"Gynecology — Core Privileges", type:"clinical", core:true, unit:"gynecological surgeries",
        edu:"ACGME- or AOA-accredited residency in obstetrics and gynecology.",
        cert:"Certification (or board-eligible, certified within 5 yrs) in obstetrics and gynecology by the American Board of Obstetrics and Gynecology or the American Osteopathic Board of Obstetrics and Gynecology. MOC required unless legacy.",
        trainAlt:"Completion of an ACGME-/AOA-accredited residency or fellowship within the past 12 months.",
        newMin:{n:25,m:12}, renMin:{n:75,m:36}},
      {name:"Urogynecology & Reconstructive Pelvic Surgery", type:"clinical", unit:"female pelvic medicine & reconstructive surgical procedures",
        edu:"Meet core gynecology criteria AND complete a fellowship in female pelvic medicine and reconstructive surgery / urogynecology.",
        cert:"Subspecialty certification (or board-eligible, certified within 5 yrs) in FPMRS by ABOG or AOBOG.",
        trainAlt:"Completion of an ACGME-/AOA-accredited residency or fellowship within the past 12 months.",
        newMin:{n:12,m:12}, renMin:{n:36,m:36}, prereq:"core gynecology privileges"},
      courseBlock("Use of Laser","laser")
    ]
  },
  pain:{
    label:"Pain Medicine", version:"May 6, 2026",
    blocks:[
      {name:"Pain Medicine — Core Privileges", type:"clinical", core:true, unit:"pain medicine procedures",
        edu:"ACGME- or AOA-accredited fellowship in pain medicine.",
        cert:"Subspecialty certification (or board-eligible, within 5 yrs) in pain medicine by ABA, ABPN, or ABPMR; AND certification (or board-eligible, within 5 yrs) by the American Board of Pain Medicine. MOC required unless legacy.",
        trainAlt:"Completion of an ACGME-/AOA-accredited fellowship within the past 12 months.",
        newMin:{n:24,m:12}, renMin:{n:72,m:36}},
      courseBlock("Fluoroscopy","fluoroscopy")
    ]
  },
  plastic:{
    label:"Plastic Surgery", version:"May 6, 2026",
    blocks:[
      {name:"Plastic Surgery — Core Privileges", type:"clinical", core:true, unit:"plastic surgeries",
        edu:"ACGME- or AOA-accredited residency in plastic surgery.",
        cert:"Certification (or board-eligible, within 5 yrs) in plastic surgery by the American Board of Plastic Surgery or the American Osteopathic Board of Surgery (Plastic and Reconstructive Surgery). MOC required unless legacy.",
        trainAlt:"Completion of an ACGME-/AOA-accredited residency or fellowship within the past 12 months.",
        newMin:{n:25,m:12}, renMin:{n:75,m:36}},
      {name:"Pediatric Craniomaxillofacial Surgery", type:"clinical", unit:"pediatric craniomaxillofacial surgeries",
        edu:"Meet core plastic surgery criteria AND complete a one-year fellowship in pediatric craniomaxillofacial surgery.",
        cert:"Certification (or board-eligible, within 5 yrs) in plastic surgery by ABPS or AOBS (Plastic and Reconstructive Surgery).",
        trainAlt:"Completion of fellowship training within the past 12 months.",
        newMin:{n:12,m:12}, renMin:{n:36,m:36}, prereq:"core plastic surgery privileges"},
      {name:"Advanced Hand Surgery", type:"clinical", unit:"advanced hand surgeries",
        edu:"Meet core plastic surgery criteria AND complete a one-year fellowship in hand surgery.",
        cert:"Certification in plastic surgery by ABPS or AOBS; AND a Certificate of Advanced Qualification (CAQ) in Hand Surgery. MOC required unless legacy.",
        trainAlt:"Completion of fellowship training within the past 12 months.",
        newMin:{n:12,m:12}, renMin:{n:36,m:36}, prereq:"core plastic surgery privileges"},
      courseBlock("Use of Laser","laser")
    ]
  },
  ophthalmology:{
    label:"Ophthalmology", version:"May 6, 2026",
    blocks:[
      {name:"Ophthalmology — Core Privileges", type:"clinical", core:true, unit:"ophthalmology procedures",
        edu:"ACGME- or AOA-accredited residency in ophthalmology.",
        cert:"Certification (or board-eligible, within 5 yrs) in ophthalmology by the American Board of Ophthalmology or the American Osteopathic Board of Ophthalmology and Otolaryngology — Head and Neck Surgery. MOC required unless legacy.",
        trainAlt:"Completion of an ACGME-/AOA-accredited residency within the past 12 months.",
        newMin:{n:10,m:12}, renMin:{n:30,m:36}},
      courseBlock("Use of Laser","laser","Required for the standard-laser procedures listed in the ophthalmology core block (peripheral iridotomy, trabeculoplasty, capsulotomy, pan-retinal / focal macular photocoagulation, laser suture lysis, retinopexy)."),
      {name:"Femtosecond-laser Assisted Cataract Surgery", type:"clinical", unit:"femtosecond-laser assisted cataract surgeries",
        edu:"Meet core ophthalmology privileges.",
        trainAlt:"Completion of an ACGME-/AOA-accredited residency or fellowship within the past 12 months.",
        newMin:{n:1,m:12}, renMin:{n:3,m:36}, prereq:"core ophthalmology privileges"},
      {name:"miCOR-assisted Cataract Surgery", type:"clinical", unit:"miCOR-assisted cataract surgeries",
        edu:"Meet core ophthalmology privileges.",
        trainAlt:"Completion of an ACGME-/AOA-accredited residency or fellowship within the past 12 months.",
        newMin:{n:1,m:12}, renMin:{n:3,m:36}, prereq:"core ophthalmology privileges"},
      {name:"Implantable Collamer Lens (ICL) Surgery", type:"clinical", unit:"ICL surgeries",
        edu:"Meet core ophthalmology privileges.",
        trainAlt:"Completion of an ACGME-/AOA-accredited residency or fellowship within the past 12 months.",
        newMin:{n:1,m:12}, renMin:{n:3,m:36}, prereq:"core ophthalmology privileges"},
      {name:"Schlemm's Canal Surgery", type:"clinical", unit:"Schlemm's canal surgeries",
        edu:"Meet core ophthalmology privileges.",
        special:"Additional certification for one or more specific devices/procedures: Trabectome, iStent, Kahook Dual Blade Goniotomy, Hydrus Microstent, Omni surgical system, or iTrack Advance.",
        trainAlt:"Completion of an ACGME-/AOA-accredited residency or fellowship within the past 12 months.",
        newMin:{n:1,m:12}, renMin:{n:3,m:36}, prereq:"core ophthalmology privileges"},
      {name:"Ab interno Aqueous Micro Shunt (Xen Gel Stent)", type:"clinical", unit:"Xen Gel Stent procedures",
        edu:"Meet core ophthalmology privileges.",
        trainAlt:"Completion of an ACGME-/AOA-accredited residency or fellowship within the past 12 months.",
        newMin:{n:1,m:12}, renMin:{n:3,m:36}, prereq:"core ophthalmology privileges"},
      {name:"Advanced Corneal Surgery", type:"clinical", unit:"advanced corneal surgeries",
        edu:"Meet core ophthalmology privileges AND complete a fellowship in corneal surgery.",
        trainAlt:"Completion of an ACGME-/AOA-accredited residency or fellowship within the past 12 months.",
        newMin:{n:2,m:12}, renMin:{n:6,m:36}, prereq:"core ophthalmology privileges"},
      {name:"Intralase-enabled Keratoplasty (IEK)", type:"clinical", unit:"IEK procedures",
        edu:"Meet core ophthalmology privileges AND complete a fellowship in corneal surgery.",
        trainAlt:"Completion of an ACGME-/AOA-accredited residency or fellowship within the past 12 months.",
        newMin:{n:1,m:12}, renMin:{n:3,m:36}, prereq:"core ophthalmology privileges"},
      {name:"Advanced Glaucoma Surgery", type:"clinical", unit:"advanced glaucoma surgeries",
        edu:"Meet core ophthalmology privileges AND complete a fellowship in glaucoma surgery.",
        trainAlt:"Completion of an ACGME-/AOA-accredited residency or fellowship within the past 12 months.",
        newMin:{n:2,m:12}, renMin:{n:6,m:36}, prereq:"core ophthalmology privileges"},
      {name:"Keratorefractive Surgery", type:"clinical", unit:"keratorefractive surgeries",
        edu:"Meet core ophthalmology privileges AND complete a fellowship in keratorefractive or corneal surgery.",
        trainAlt:"Completion of an ACGME-/AOA-accredited residency or fellowship within the past 12 months.",
        newMin:{n:1,m:12}, renMin:{n:3,m:36}, prereq:"core ophthalmology privileges"},
      {name:"Advanced Oculoplastic Surgery", type:"clinical", unit:"advanced oculoplastic surgeries",
        edu:"Meet core ophthalmology privileges AND complete a fellowship in oculoplastic surgery.",
        trainAlt:"Completion of an ACGME-/AOA-accredited residency or fellowship within the past 12 months.",
        newMin:{n:2,m:12}, renMin:{n:6,m:36}, prereq:"core ophthalmology privileges"},
      {name:"Retina and Vitreous Surgery", type:"clinical", unit:"retina and vitreous surgeries",
        edu:"Meet core ophthalmology privileges AND complete a fellowship in vitreo-retinal surgery.",
        trainAlt:"Completion of an ACGME-/AOA-accredited residency or fellowship within the past 12 months.",
        newMin:{n:2,m:12}, renMin:{n:6,m:36}, prereq:"core ophthalmology privileges"},
      {name:"Retinal Exam & Treatment for Retinopathy of Prematurity (ROP)", type:"clinical", unit:"ROP procedures",
        edu:"Meet core ophthalmology privileges AND complete a fellowship in vitreoretinal diseases or pediatric ophthalmology that included ROP retinal-exam training.",
        trainAlt:"Completion of an ACGME-/AOA-accredited residency or fellowship within the past 12 months.",
        newMin:{n:1,m:12}, renMin:{n:3,m:36}, prereq:"core ophthalmology privileges"},
      {name:"Pediatric / Adolescent Glaucoma Surgery", type:"clinical", unit:"pediatric/adolescent glaucoma surgeries",
        edu:"Meet core ophthalmology privileges AND complete a fellowship in glaucoma or pediatric ophthalmology that included pediatric glaucoma surgery training.",
        trainAlt:"Completion of an ACGME-/AOA-accredited residency or fellowship within the past 12 months.",
        newMin:{n:1,m:12}, renMin:{n:3,m:36}, prereq:"core ophthalmology privileges"},
      {name:"Pediatric Cataract Surgery", type:"clinical", unit:"pediatric/adolescent cataract surgeries",
        edu:"Meet core ophthalmology privileges AND complete a fellowship in pediatric ophthalmology that included pediatric cataract surgery training.",
        trainAlt:"Completion of an ACGME-/AOA-accredited residency or fellowship within the past 12 months.",
        newMin:{n:1,m:12}, renMin:{n:3,m:36}, prereq:"core ophthalmology privileges"}
    ]
  },
  ortho:{
    label:"Orthopedic Surgery", version:"May 6, 2026",
    blocks:[
      {name:"Orthopedic Surgery — Core Privileges", type:"clinical", core:true, unit:"orthopedic surgical procedures",
        edu:"ACGME- or AOA-accredited residency in orthopedic surgery.",
        cert:"Certification (or board-eligible, within 5 yrs) in orthopedic surgery by the American Board of Orthopaedic Surgery or the American Osteopathic Board of Orthopedic Surgery. MOC required unless legacy.",
        trainAlt:"Completion of an ACGME-/AOA-accredited residency or fellowship within the past 12 months.",
        newMin:{n:35,m:12}, renMin:{n:105,m:36}},
      {name:"Hand Surgery", type:"clinical", unit:"hand surgeries",
        edu:"ACGME-/AOA-accredited residency in orthopedic surgery AND an accredited fellowship in hand surgery.",
        cert:"Certification in orthopedic surgery by ABOS or AOBOS; AND subspecialty certification in Surgery of the Hand (SSH) through ABOS (or board-eligible within 5 yrs). MOC required unless legacy.",
        trainAlt:"Completion of fellowship training within the past 12 months.",
        newMin:{n:40,m:12}, renMin:{n:120,m:36}, prereq:"core orthopedic privileges"},
      {name:"Spine Surgery", type:"clinical", unit:"spine surgeries",
        edu:"ACGME-/AOA-accredited residency in orthopedic surgery AND an ACGME-/AOA-accredited fellowship in pediatric orthopedics or orthopedic surgery of the spine.",
        cert:"Certification (or board-eligible, within 5 yrs) in orthopedic surgery by ABOS or AOBOS. MOC required unless legacy.",
        trainAlt:"Completion of fellowship training within the past 12 months.",
        newMin:{n:20,m:12}, renMin:{n:60,m:36}, prereq:"core orthopedic privileges"},
      courseBlock("Fluoroscopy","fluoroscopy")
    ]
  },
  gen_surg:{
    label:"General Surgery", version:"May 6, 2026",
    blocks:[
      {name:"General Surgery — Core Privileges", type:"clinical", core:true, unit:"general surgery procedures",
        edu:"ACGME- or AOA-accredited residency in general surgery.",
        cert:"Certification (or board-eligible, within 5 yrs) in general surgery by the American Board of Surgery or the American Osteopathic Board of Surgery. MOC required unless legacy.",
        trainAlt:"Completion of an ACGME-/AOA-accredited residency or fellowship within the past 12 months.",
        newMin:{n:25,m:12}, renMin:{n:75,m:36}},
      {name:"Excision of Thyroglossal Duct and Branchial Cleft Cysts", type:"clinical", unit:"procedures",
        edu:"Meet the criteria for core general surgery privileges.",
        trainAlt:"Completion of an ACGME-/AOA-accredited residency or fellowship within the past 12 months.",
        newMin:{n:2,m:12}, renMin:{n:6,m:36}, prereq:"core general surgery privileges"},
      {name:"Endoscopic Surgery", type:"clinical", unit:"endoscopic procedures",
        edu:"Meet the criteria for core general surgery privileges.",
        cert:"Certification (or board-eligible, within 5 yrs) in general surgery by ABS or AOBS. MOC required unless legacy.",
        trainAlt:"Completion of an ACGME-/AOA-accredited residency or fellowship within the past 12 months.",
        newMin:{n:25,m:12}, renMin:{n:75,m:36}, prereq:"core general surgery privileges"},
      {name:"Breast Disease", type:"clinical", unit:"breast disease procedures",
        edu:"ACGME- or AOA-accredited residency in general surgery.",
        cert:"Certification (or board-eligible, within 5 yrs) in general surgery by ABS or AOBS. MOC required unless legacy.",
        trainAlt:"Completion of an ACGME-/AOA-accredited residency or fellowship within the past 12 months.",
        newMin:{n:25,m:12}, renMin:{n:75,m:36}, prereq:"core general surgery privileges"},
      {name:"Breast Reconstruction", type:"clinical", unit:"breast reconstruction procedures",
        edu:"Meet the criteria for Breast Disease privileges.",
        trainAlt:"Completion of an ACGME-/AOA-accredited residency or fellowship within the past 12 months.",
        newMin:{n:10,m:12}, renMin:{n:30,m:36}, prereq:"Breast Disease privileges"},
      {name:"Point of Care Ultrasound (POCUS)", type:"clinical", unit:"POCUS procedures",
        edu:"Approved residency/fellowship that included training in POCUS principles.",
        trainAlt:"Completion of an ACGME-/AOA-accredited residency or fellowship within the past 12 months.",
        newMin:{n:15,m:36}, renMin:{n:15,m:36}, prereq:"core general surgery privileges"}
    ]
  },
  gi:{
    label:"Gastroenterology", version:"May 20, 2026",
    blocks:[
      {name:"Gastroenterology — Core Privileges", type:"clinical", core:true, unit:"gastroenterology procedures",
        edu:"ACGME- or AOA-accredited fellowship in gastroenterology.",
        cert:"Certification (or board-eligible, within 5 yrs) in gastroenterology by the American Board of Internal Medicine, or Certificate of Special Qualifications in gastroenterology by the American Osteopathic Board of Internal Medicine. MOC required unless legacy.",
        trainAlt:"Completion of fellowship training within the past 12 months.",
        newMin:{n:50,m:12}, renMin:{n:150,m:36}},
      courseBlock("Fluoroscopy","fluoroscopy"),
      courseBlock("Use of Laser","laser")
    ]
  },
  ent:{
    label:"Otolaryngology", version:"May 6, 2026",
    blocks:[
      {name:"Otolaryngology — Core Privileges", type:"clinical", core:true, unit:"otolaryngology surgeries",
        edu:"ACGME- or AOA-accredited residency in otolaryngology.",
        cert:"Certification (or board-eligible, within 5 yrs) in otolaryngology by the American Board of Otolaryngology or the American Osteopathic Board of Ophthalmology and Otolaryngology — Head and Neck Surgery. MOC required unless legacy.",
        trainAlt:"Completion of an ACGME-/AOA-accredited residency or fellowship within the past 12 months.",
        newMin:{n:25,m:12}, renMin:{n:75,m:36}},
      {name:"Neurotology", type:"clinical", unit:"neurotology procedures",
        edu:"Meet core otolaryngology criteria AND complete a fellowship in neurotology.",
        cert:"Subspecialty certification (or board-eligible, within 5 yrs) in neurotology by the American Board of Otolaryngology.",
        trainAlt:"Completion of fellowship training within the past 12 months.",
        newMin:{n:15,m:12}, renMin:{n:45,m:36}, prereq:"core otolaryngology privileges"},
      {name:"Plastic and Reconstructive Surgery", type:"clinical", unit:"plastic and reconstructive surgeries",
        edu:"ACGME- or AOA-accredited residency in otolaryngology that included training in plastic and reconstructive surgery.",
        cert:"Certification (or board-eligible, within 5 yrs) in otolaryngology (as above). MOC required unless legacy.",
        trainAlt:"Completion of an ACGME-/AOA-accredited residency or fellowship within the past 12 months.",
        newMin:{n:3,m:12}, renMin:{n:9,m:36}, prereq:"core otolaryngology privileges"},
      {name:"Craniomaxillofacial Trauma", type:"clinical", unit:"craniomaxillofacial trauma surgeries",
        edu:"ACGME- or AOA-accredited residency in otolaryngology that included training in craniomaxillofacial trauma.",
        cert:"Certification (or board-eligible, within 5 yrs) in otolaryngology (as above). MOC required unless legacy.",
        trainAlt:"Completion of an ACGME-/AOA-accredited residency or fellowship within the past 12 months.",
        newMin:{n:2,m:12}, renMin:{n:6,m:36}, prereq:"core otolaryngology privileges"},
      courseBlock("Use of Laser","laser"),
      courseBlock("Administration of Chemotherapy and Biotherapy","chemo")
    ]
  },
  pa:{
    label:"Physician Assistant", version:"August 4, 2026",
    blocks:[
      {name:"General Privileges", type:"clinical", core:true, unit:"perioperative patients",
        edu:"Completion of an educational program approved by ARC-PA or CAAHEP.",
        cert:"Current NY State PA licensure; AND current NCCPA certification.",
        trainAlt:"Successful completion of a master's degree leading to certification as a physician assistant or PA residency program in the past 12 months.",
        newMin:{n:30,m:12}, renMin:{n:90,m:36}},
      {name:"Operative First Assist Privileges", type:"clinical", unit:"surgical first-assist procedures",
        edu:"Applicant must meet the criteria for general PA privileges.",
        cert:"Applicant must meet the criteria for general PA privileges.",
        trainAlt:"Successful completion of a master's degree leading to certification as a physician assistant or PA residency program in the past 12 months.",
        newMin:{n:30,m:12}, renMin:{n:90,m:36}, prereq:"general PA privileges"},
      paCourseBlock("Fluoroscopy","fluoroscopy"),
      paCourseBlock("Use of Laser","laser")
    ]
  },
  anesthesia_physician:{
    label:"Anesthesiology — Physician (MD or DO)", version:"May 18, 2026",
    blocks:[
      {name:"Adult Anesthesiology (18 years or older)", type:"clinical", unit:"anesthesia encounters",
        edu:"ACGME- or AOA-accredited residency in anesthesiology.",
        cert:"Certification (or board-eligible, within 5 yrs) in anesthesiology by the American Board of Anesthesiology or the American Osteopathic Board of Anesthesiology; AND current ACLS (American Heart Association); AND/OR current PeRLS (American Society of Anesthesiology). MOC required unless legacy.",
        trainAlt:"Completion of an ACGME-/AOA-accredited residency or fellowship within the past 12 months.",
        newMin:{n:50,m:12}, renMin:{n:150,m:36}},
      {name:"Pediatric Anesthesiology (2 months to 17 years)", type:"clinical", unit:"pediatric anesthesia encounters",
        edu:"ACGME-/AOA-accredited residency in anesthesiology AND an ACGME-/AOA-accredited fellowship in pediatric anesthesiology.",
        cert:"Anesthesiology certification (ABA or AOBA) AND pediatric anesthesiology certification (ABA or AOBA), each current or board-eligible within 5 yrs; AND current PALS (AHA); AND current ACLS (AHA); AND/OR current PeRLS (ASA). MOC required unless legacy.",
        trainAlt:"Completion of fellowship training in pediatric anesthesiology within the past 12 months.",
        newMin:{n:50,m:12}, renMin:{n:150,m:36}}
    ]
  },
  anesthesia_crna:{
    label:"Anesthesiology — CRNA", version:"May 18, 2026",
    blocks:[
      {name:"Anesthesia by a CRNA", type:"clinical", unit:"anesthesia encounters",
        edu:"Graduate of a nurse-anesthesia program accredited by the Council on Accreditation of Nurse Anesthesia Educational Programs (or its successor).",
        cert:"Active RN license/registration in New York State; AND current certification by the NBCRNA; AND current BLS (AHA); AND current ACLS (AHA).",
        trainAlt:"Completion of an accredited nurse-anesthesia training program within the past 12 months.",
        newMin:{n:50,m:12}, renMin:{n:150,m:36}}
    ]
  }
};

const PROVIDERS = {
  surgeon:{
    label:"Surgeon",
    step2:"specialty",
    specialties:["gen_surg","gi","gyn","ent","ortho","ophthalmology","plastic","podiatry","urology","pain"]
  },
  pa:{
    label:"Physician Assistant",
    step2:"none",
    fixedSpec:"pa"
  },
  anesthesia:{
    label:"Anesthesia Provider",
    step2:"anesthesia_track",
    specialties:["anesthesia_physician","anesthesia_crna"]
  }
};

const ANESTHESIA_OPTS = {
  anesthesia_physician:"Physician (MD or DO)",
  anesthesia_crna:"CRNA"
};

/* Documents every applicant submits regardless of provider type or specialty. */
const GENERAL_FORMS = [
  {file:HEALTH_ASSESSMENT, label:"Annual Health Assessment",
   note:"Completed, dated, and signed by a licensed practitioner (MD, DO, PA, or NP)."},
  {file:PHYSICAL_EXAM, label:"Physical Examination Form",
   note:"Submitted with the annual health assessment."}
];


/* Basic credentialing checklist for a new application. Pass a specialty key to
   get the DOP and case-log entries as live links; pass nothing for the generic
   list, where those two entries stay as plain text. */
function basicCredentialingItems(spec){
  const dop=DOP_FORM[spec];
  const clog=CASE_LOG[spec];
  const dopLink = assetLink(DOP_BASE, dop, "Delineation of Privileges (DOP) Form");
  const caseLogText = clog
    ? assetLink(CASE_LOG_BASE, clog, "Case Log")+" (use the specialty template)"
    : "Case Log";
  const healthLink = assetLink(FORMS_BASE, HEALTH_ASSESSMENT, "Health Assessment");
  const peLink = assetLink(FORMS_BASE, PHYSICAL_EXAM, "Physical Examination Form");

  return [
    "Three Professional References",
    "Government-issued Photo ID",
    "Proof of Board Certification",
    "New York State Medical/PA/CRNA License Certificate",
    "DEA Certificate",
    "Mandated Reporter Training Certificate",
    "Proof of Professional Liability Coverage — For Mount Sinai providers we will request a copy of your certificate from Mount Sinai",
    healthLink+" (to be completed, dated, and signed by a licensed practitioner: MD, DO, PA, or NP)",
    peLink,
    "Quantiferon TB Test dated within 3 months",
    "Immunization Records — MMR, Hep B, and Influenza",
    dopLink,
    caseLogText,
    "Training Certificates if applicable (i.e. BLS, ACLS, Laser/OR Fire Safety, Fluoroscopy, & Chemo Admin)"
  ];
}
