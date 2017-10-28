define("jquery",[],function(){return jQuery}),define("lib/init-graduate-search-module",["jquery"],function(n){"use strict";var i={"top-business-schools":[["accounting-rankings","Accounting"],["entrepreneurship-rankings","Entrepreneurship"],["executive-rankings","Executive MBA"],["finance-rankings","Finance"],["information-systems-rankings","Information Systems"],["international-business-rankings","International"],["logistics-rankings","Supply Chain / Logistics"],["management-rankings","Management"],["marketing-rankings","Marketing"],["nonprofit-rankings","Nonprofit"],["part-time-rankings","Part-time MBA"],["production-operations-rankings","Production / Operations"]],"top-education-schools":[["curriculum-instruction-rankings","Curriculum and instruction"],["education-administration-rankings","Education administration and supervision"],["education-policy-rankings","Education policy"],["education-psychology-rankings","Educational psychology"],["higher-education-administration-rankings","Higher education administration"],["secondary-teacher-education-rankings","Secondary teacher education"],["special-needs-education-rankings","Special education"],["student-counseling-rankings","Student counseling and personnel services"],["teacher-education-rankings","Elementary teacher education"],["vocational-education-rankings","Technical / Vocational"]],"top-engineering-schools":[["aerospace-rankings","Aerospace / Aeronautical / Astronautical Engineering"],["biological-agricultural-rankings","Biological / Agricultural Engineering"],["biomedical-rankings","Biomedical Engineering / Bioengineering"],["chemical-engineering-rankings","Chemical Engineering"],["civil-engineering-rankings","Civil Engineering"],["computer-engineering-rankings","Computer Engineering"],["electrical-engineering-rankings","Electrical / Electronic / Communications Engineering"],["environmental-engineering-rankings","Environmental / Environmental Health Engineering"],["industrial-engineering-rankings","Industrial / Manufacturing / Systems Engineering"],["material-engineering-rankings","Materials Engineering"],["mechanical-engineering-rankings","Mechanical Engineering"],["nuclear-engineering-rankings","Nuclear Engineering"],["petroleum-engineering-rankings","Petroleum Engineering"]],"top-fine-arts-schools":[["ceramics-rankings","Ceramics"],["fiber-arts-rankings","Fiber Arts"],["glass-rankings","Glass"],["graphic-design-rankings","Graphic Design"],["metals-jewelry-rankings","Metals / Jewelry"],["painting-drawing-rankings","Painting / Drawing"],["photography-rankings","Photography"],["printmaking-rankings","Printmaking"],["sculpture-rankings","Sculpture"],["time-based-media-rankings","Time-Based Media / New Media"]],"top-law-schools":[["clinical-healthcare-law-rankings","Health Care Law"],["clinical-training-rankings","Clinical Training"],["dispute-resolution-rankings","Dispute Resolution"],["environmental-law-rankings","Environmental Law"],["intellectual-property-law-rankings","Intellectual Property Law"],["international-law-rankings","International Law"],["legal-writing-rankings","Legal Writing"],["part-time-law-rankings","Part-time Law"],["tax-law-rankings","Tax Law"],["trial-advocacy-rankings","Trial Advocacy"]],"top-library-information-science-programs":[["children-youth-service-rankings","Services for Children and Youth"],["digital-librarianship-rankings","Digital Librarianship"],["health-librarianship-rankings","Health Librarianship"],["information-science-rankings","Information Systems"],["law-librarianship-rankings","Law Librarianship"],["library-media-rankings","School Library Media"],["library-preservation-rankings","Archives and Preservation"]],"top-medical-schools":[["drug-alcohol-abuse-rankings","Drug and alcohol abuse"],["family-medicine-rankings","Family medicine"],["geriatrics-rankings","Geriatrics"],["internal-medicine-rankings","Internal medicine"],["pediatrics-rankings","Pediatrics"],["rural-medicine-rankings","Rural medicine"],["womens-health-rankings","Women's Health"]],"top-public-affairs-schools":[["city-management-rankings","City Management and Urban Policy"],["environmental-management-rankings","Environmental Policy and Management"],["health-management-rankings","Health Policy and Management"],["information-technology-management-rankings","Information and Technology Management"],["nonprofit-management-rankings","Nonprofit Management"],["public-finance-budgeting-rankings","Public Finance and Budgeting"],["public-management-administration-rankings","Public Management Administration"],["public-policy-analysis-rankings","Public-Policy Analysis"],["social-policy-rankings","Social Policy"]],"top-nursing-schools":[["clinical-nurse-leader-rankings","Clinical Nurse Leader"],["nurse-practitioner-adult-geriatric-acute-care-rankings","Nurse Practitioner: Adult / Gerontology, Acute Care"],["nurse-practitioner-adult-geriatric-rankings","Nurse Practitioner: Adult / Gerontology, Primary Care"],["family-nursing-rankings","Nurse Practitioner: Family"],["pediatric-nursing-rankings","Nurse Practitioner: Pediatric, Primary Care"],["nurse-practitioner-mental-health-rankings","Nurse Practitioner: Psychiatric / Mental Health, Across the Lifespan"],["nursing-administration-rankings","Nursing Administration"],["nursing-informatics-rankings","Nursing Informatics"]],"top-biological-sciences-programs":[["molecular-biology-rankings","Molecular Biology"],["ecology-rankings","Ecology / Evolutionary Biology"],["biophysics-rankings","Biochemistry / Biophysics / Structural Biology "],["neurosciences-rankings","Neuroscience / Neurobiology"],["genetics-rankings","Genetics / Genomics / Bioinformatics"],["cell-biology-rankings","Cell Biology"],["infectious-disease-rankings","Immunology / Infectious Disease"],["microbiology-rankings","Microbiology"]],"top-chemistry-schools":[["biochemistry-rankings","Biochemistry"],["physical-science-rankings","Physical"],["inorganic-science-rankings","Inorganic"],["organic-science-rankings","Organic"],["analytical-science-rankings","Analytical"],["theoretical-science-rankings","Theoretical"]],"top-computer-science-schools":[["artificial-intelligence-rankings","Artificial Intelligence"],["computer-programming-rankings","Programming Language"],["computer-systems-rankings","Systems"],["computer-theory-rankings","Theory"]],"top-earth-sciences-schools":[["geology-rankings","Geology"],["paleontology-rankings","Paleontology"],["geochemistry-rankings","Geochemistry"],["geophysics-seismology-rankings","Geophysics and Seismology"]],"top-mathematics-programs":[["geometry-rankings","Geometry"],["mathematical-analysis-rankings","Analysis"],["logic-rankings","Logic"],["discrete-mathematics-rankings","Discrete Mathematics and Combinatorics"],["topology-rankings","Topology"],["applied-mathematics-rankings","Applied Math"],["number-theory-rankings","Algebra / Number Theory / Algebraic Geometry"]],"top-physics-schools":[["condensed-matter-rankings","Condensed Matter"],["atomic-science-rankings","Atomic / Molecular / Optical"],["quantum-physics-rankings","Quantum"],["astrophysics-rankings","Cosmology / Relativity / Gravity"],["plasma-science-rankings","Plasma"],["string-theory-rankings","Elementary Particles / Field / String Theory"],["nuclear-science-rankings","Nuclear"]],"top-economics-schools":[["econometrics-rankings","Econometrics"],["labor-economics-rankings","Labor Economics"],["microeconomics-rankings","Microeconomics"],["international-economics-rankings","International Economics"],["macroeconomics-rankings","Macroeconomics"],["industrial-organization-rankings","Industrial Organization"],["development-economics-rankings","Development Economics"],["public-finance-rankings","Public Finance"]],"top-english-schools":[["british-literature-rankings","18th Through 20th Century British Literature"],["medieval-renaissance-literature-rankings","Medieval / Renaissance Literature"],["postbellum-american-literature-rankings","American Literature After 1865"],["gender-literature-rankings","Gender and Literature"],["literary-criticism-rankings","Literary Criticism and Theory"],["antebellum-american-literature-rankings","American Literature Before 1865"],["african-american-literature-rankings","African-American Literature"]],"top-history-schools":[["us-colonial-history-rankings","U.S. Colonial History"],["modern-us-history-rankings","Modern U.S. History"],["european-history-rankings","European History"],["african-american-history-rankings","African-American History"],["cultural-history-rankings","Cultural History"],["latin-american-history-rankings","Latin American History"],["african-history-rankings","African History"],["womens-history-rankings","Women's History"],["asian-history-rankings","Asian History"]],"top-political-science-schools":[["american-politics-rankings","American Politics"],["political-theory-rankings","Political Theory"],["international-politics-rankings","International Politics"],["comparative-politics-rankings","Comparative Politics"],["political-methodology-rankings","Political Methodology"]],"top-psychology-schools":[["developmental-psychology-rankings","Developmental Psychology"],["social-psychology-psychology-rankings","Social Psychology"],["cognitive-psychology-rankings","Cognitive Psychology"],["behavioral-neuroscience-rankings","Behavioral Neuroscience"],["industrial-organizational-psychology-rankings","Industrial and Organizational Psychology"],["experimental-psychology-rankings","Experimental Psychology"]],"top-sociology-schools":[["economic-sociology-rankings","Economic Sociology"],["historic-sociology-rankings","Historical Sociology"],["social-psychology-sociology-rankings","Social Psychology"],["sociology-of-culture-rankings","Sociology of Culture"],["sex-gender-sociology-rankings","Sex and Gender"],["social-stratification-rankings","Social Stratification"],["sociology-of-population-rankings","Sociology of Population"]]},a=function(n,i){var a;if(n){n.empty(),n.append('<option value=""></option>');for(a in i)i.hasOwnProperty(a)&&n.append('<option value="'+i[a][0]+'">'+i[a][1]+"</option>")}};return function(r){var e,o,s;r=n(r),e=n("select[name=program]",r),o=n("select[name=specialty]",r),s=function(){var s=e.val(),t=i[s];n(":input:not([name=program]):not([name=specialty])",r).prop("disabled",!s),a(o,t),o.prop("disabled",!t),n("select:not([name=program])",r).trigger("change").trigger("chosen:updated")},e.on("change",s),s()}});