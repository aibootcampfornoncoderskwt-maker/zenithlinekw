import type { Service } from '../services';

const illustration = (name: string) => `/images/services/illustrations/${name}.webp`;

export const supportServices: Service[] = [
  {
    slug: 'import-export', title: 'Import & Export Solutions in Kuwait', shortTitle: 'Import / Export', category: 'Trading & Support',
    seoTitle: 'Import, Export & Sourcing Support Kuwait', metaDescription: 'Discuss international sourcing, supplier coordination, documentation and shipment support for technical and project requirements in Kuwait.',
    heroEyebrow: 'International sourcing and trade support for Kuwait', summary: 'Supplier, order, documentation and shipment coordination for agreed international sourcing and trading requirements.',
    intro: 'Import and export support coordinates the commercial and logistical steps between a buyer, supplier, freight parties and the required destination. Zenith Line can review international sourcing, supplier follow-up, contract or order coordination, documentation support and shipment oversight for selected project and trading requirements. Product eligibility, customs treatment, permits, duties, insurance and regulated approvals must be confirmed for the actual goods and route.',
    overviewHeading: 'A Clearer Route from Requirement to Shipment', scopeHeading: 'Trade Support That May Be Included', applicationHeading: 'Requirements That Benefit from Coordinated Sourcing', considerationsHeading: 'What Affects an Import or Export Quotation?', processHeading: 'Specify, Source, Coordinate and Close Out',
    primaryKeyword: 'import export services Kuwait', secondaryKeywords: ['international sourcing Kuwait', 'supplier coordination Kuwait', 'trade logistics Kuwait', 'project procurement Kuwait'],
    image: illustration('import-export'), imageAlt: 'Technical illustration of cargo, documents and international shipping routes', imageWidth: 1200, imageHeight: 800,
    detailImages: [{ src: '/images/industrial-construction.webp', alt: 'Materials stored inside a large industrial facility', width: 1120, height: 630, caption: 'Representative project-material environment from supplied assets.' }],
    customerProblems: [
      { title: 'The specification is difficult to source locally', description: 'The buyer needs supplier options matched to technical and commercial requirements.' },
      { title: 'Order communication is fragmented', description: 'Clarifications, documents, production and shipping updates need one agreed workflow.' },
      { title: 'Incoterms and responsibilities are unclear', description: 'Freight, insurance, duties and delivery boundaries must be assigned before ordering.' },
      { title: 'Documentation may delay movement', description: 'Product, origin, packing and transport records need early review.' }
    ],
    scope: ['International supplier and product sourcing', 'Supplier communication and clarification', 'Commercial order and contract follow-up', 'Document coordination support', 'Freight and shipment-status coordination', 'Import or export brokerage support where agreed'],
    deliverables: [
      { title: 'Sourcing brief', description: 'Defined specification, quantity, destination, required documents and acceptance criteria.' },
      { title: 'Commercial comparison', description: 'Available supplier, lead-time, origin and scope information for buyer review.' },
      { title: 'Order and document coordination', description: 'Agreed follow-up of confirmations, packing, invoices and shipment milestones.' },
      { title: 'Delivery-status visibility', description: 'Known shipping events and exception coordination within the approved responsibility.' }
    ],
    suitableFor: [
      { title: 'Construction procurement', description: 'Specified materials, components and project-related products.' },
      { title: 'Technical and IT products', description: 'Compatible equipment and accessories requiring clear model control.' },
      { title: 'Industrial requirements', description: 'Parts, tools and materials sourced to an agreed specification.' },
      { title: 'Selected trading products', description: 'Eligible goods assessed by product, origin, destination and documentation needs.' }
    ],
    technicalHeading: 'A Complete Specification Prevents Expensive Substitutions',
    technicalIntro: 'Part numbers, drawings, performance requirements, approved equivalents, quantity, destination and required documents should be agreed before supplier comparison. A low unit price may exclude freight, duties, inspection, certification, packing or local delivery. Zenith Line does not present every manufacturer as an authorized partner; proposed supply sources and product status must be confirmed per quotation.',
    considerations: [
      { title: 'Product specification', description: 'Models, materials, standards and acceptable equivalents control sourcing.' },
      { title: 'Quantity and packaging', description: 'Order size, dimensions, weight and protection affect supplier and freight options.' },
      { title: 'Origin and destination', description: 'Trade route, restrictions and required import or export procedures differ.' },
      { title: 'Incoterms and responsibility', description: 'Freight, insurance, clearance, duties and final delivery boundaries must be clear.' },
      { title: 'Documentation and approvals', description: 'Certificates, permits, origin and inspection needs depend on the goods.' },
      { title: 'Required delivery date', description: 'Availability, production and transport mode shape the feasible programme.' }
    ],
    process: [
      { title: 'Define the goods', description: 'Share specifications, quantities, destination, required date and document needs.' },
      { title: 'Source and clarify', description: 'Review available suppliers, compliance to brief, commercial boundaries and lead time.' },
      { title: 'Confirm and coordinate', description: 'Follow the approved order, documents, packing and shipment responsibility.' },
      { title: 'Track and close out', description: 'Coordinate known milestones and delivery records within the agreed scope.' }
    ],
    whyZenith: [
      { title: 'Profile-supported trade capability', description: 'Import, export, supplier connection, contract and logistics coordination are described in the profile.' },
      { title: 'Technical-category context', description: 'The company also works across construction, MEP, telecom and IT product requirements.' },
      { title: 'No implied authorization', description: 'Brands or suppliers are not represented as authorized relationships without confirmation.' },
      { title: 'Scope transparency', description: 'Trade, freight, clearance and delivery responsibilities are separated in the proposal.' }
    ],
    outcome: 'A more visible sourcing and trade process with product, supplier, documentation and shipment responsibilities clearly described.',
    cta: 'Discuss an Import or Export Requirement', secondaryCta: 'Send a Sourcing List', whatsapp: 'Hello Zenith Line, I would like to discuss import, export or international sourcing for Kuwait. I can share product specifications, quantities, origin or destination, required documents and delivery needs.', enquiryPrompt: 'Send product names and specifications, quantities, acceptable equivalents, origin or destination, required documents, delivery point and target date.',
    relatedSlugs: ['supply-logistics', 'tools-equipment-rental', 'engineering-manpower'],
    faqs: [
      { question: 'What import and export support does Zenith Line provide?', answer: 'Possible support includes international sourcing, supplier communication, order follow-up, document coordination and shipment oversight for agreed goods. The exact responsibility for freight, clearance, duties, permits, insurance and delivery is stated in the quotation.' },
      { question: 'Can Zenith Line source a specific technical product?', answer: 'Yes, a sourcing request can be reviewed when the model, drawing, performance specification, quantity and acceptable equivalent policy are clear. Availability and compliance must be confirmed for each quotation.' },
      { question: 'Are listed brands authorized partners of Zenith Line?', answer: 'The website does not claim that every listed brand is an authorized partner or distributor. Brand references describe product categories that may be sourced. Supplier status, warranty route and product origin should be confirmed in the specific offer.' },
      { question: 'Are customs duties and clearance included?', answer: 'They should not be assumed. Incoterms, freight, insurance, customs clearance, duties, permits and final delivery can fall to different parties. The quotation must identify which items Zenith Line is coordinating and which remain with the client or another provider.' },
      { question: 'What documents may be needed?', answer: 'Requirements vary by product and route and may include commercial invoices, packing lists, origin documents, transport records, product data or permits. Regulated products may require additional approvals. Exact requirements should be checked for the goods before shipment.' },
      { question: 'What is needed for a sourcing quotation?', answer: 'Send the product specification or part number, quantity, acceptable alternatives, required documents, destination, preferred delivery date and any approved-manufacturer requirement. Photos alone may not be enough for technically controlled items.' }
    ]
  },
  {
    slug: 'supply-logistics', title: 'Technical Supply & Logistics in Kuwait', shortTitle: 'Supply & Logistics', category: 'Trading & Support',
    seoTitle: 'Technical Supply & Logistics Kuwait', metaDescription: 'Request construction, MEP, telecom, IT or industrial materials in Kuwait with specification control, sourcing and coordinated delivery.',
    heroEyebrow: 'Technical materials and delivery coordination across Kuwait', summary: 'Construction, MEP, telecom, IT and industrial materials sourced against the brief and coordinated to the required Kuwait delivery point.',
    intro: 'Technical supply converts a material request, bill of quantities or part list into a controlled sourcing and delivery package. Zenith Line can review construction, mechanical, electrical, instrumentation, telecom, IT and industrial product requirements described in its company profile. Useful procurement depends on complete specifications, quantities, approved equivalents, delivery priorities and clarity on warranty, inspection and acceptance.',
    overviewHeading: 'Supply Starts with Specification Control', scopeHeading: 'Product Categories That May Be Sourced', applicationHeading: 'Who Uses Coordinated Technical Supply?', considerationsHeading: 'What Determines the Supply Quotation?', processHeading: 'Clarify, Source, Approve and Deliver',
    primaryKeyword: 'technical supply Kuwait', secondaryKeywords: ['construction materials supplier Kuwait', 'MEP materials Kuwait', 'IT equipment supplier Kuwait', 'industrial supply Kuwait'],
    image: '/images/industrial-construction.webp', imageAlt: 'Large industrial facility with packaged materials prepared in the work area', imageWidth: 1120, imageHeight: 630,
    detailImages: [{ src: illustration('technical-supply'), alt: 'Technical illustration of organized project materials and delivery coordination', width: 1200, height: 800, caption: 'Illustration representing multi-category technical supply.' }],
    customerProblems: [
      { title: 'A bill of quantities spans several categories', description: 'Civil, MEP and technology items need one structured review.' },
      { title: 'Substitutions risk non-compliance', description: 'Part numbers, standards and acceptable equivalents need controlled clarification.' },
      { title: 'Site delivery must match the programme', description: 'Materials need practical batches, access arrangements and receiving contacts.' },
      { title: 'Product status is unclear', description: 'Origin, availability, warranty route and documentation need confirmation before approval.' }
    ],
    scope: ['Construction and finishing materials', 'Mechanical and instrumentation products', 'Electrical and power components', 'Telecom, fibre and network products', 'IT hardware and accessories', 'Industrial and special-product sourcing'],
    deliverables: [
      { title: 'Requirement schedule review', description: 'Clarification of descriptions, models, quantities, standards and approved equivalents.' },
      { title: 'Itemized commercial offer', description: 'Available products, scope, exclusions, lead-time basis and delivery responsibility.' },
      { title: 'Submittal or product information', description: 'Available technical data or samples where required and included.' },
      { title: 'Coordinated Kuwait delivery', description: 'Agreed batching, destination and handover records within the supply scope.' }
    ],
    suitableFor: [
      { title: 'Contractors and subcontractors', description: 'Project materials aligned with drawings, BOQs and approved specifications.' },
      { title: 'Procurement teams', description: 'Itemized sourcing across several technical product categories.' },
      { title: 'Industrial facilities', description: 'Maintenance, replacement and operational materials identified by specification.' },
      { title: 'Corporate and institutional buyers', description: 'Network, IT, electrical and facility products with coordinated delivery.' }
    ],
    technicalHeading: 'Equivalent Products Must Be Equivalent in the Details',
    technicalIntro: 'Dimensions, ratings, materials, standards, interfaces, environmental condition and approved manufacturer lists can make apparently similar items unsuitable. A proposed alternative should be identified rather than silently substituted. Delivery dates also depend on current stock, source, quantity and approval timing, so no fixed availability is promised on the page.',
    considerations: [
      { title: 'Specification completeness', description: 'Part numbers, drawings, ratings and standards determine product compliance.' },
      { title: 'Quantity and schedule', description: 'Volume, batches and required-on-site dates shape sourcing and logistics.' },
      { title: 'Approved equivalents', description: 'Alternative-product rules affect availability and commercial options.' },
      { title: 'Origin and warranty route', description: 'Source, manufacturer support and documentation should be confirmed per offer.' },
      { title: 'Submittals and inspection', description: 'Data sheets, samples, certificates or receiving checks add project steps.' },
      { title: 'Delivery access', description: 'Vehicle restrictions, offloading, storage and receiving hours affect coordination.' }
    ],
    process: [
      { title: 'Send the material schedule', description: 'Provide BOQ, specifications, quantities, approved brands and required dates.' },
      { title: 'Clarify and source', description: 'Resolve ambiguities and identify compliant available options.' },
      { title: 'Approve the offer', description: 'Confirm products, equivalents, documentation, lead-time basis and delivery boundaries.' },
      { title: 'Coordinate delivery', description: 'Arrange agreed batches and receiving information for the Kuwait destination.' }
    ],
    whyZenith: [
      { title: 'Multi-category supply', description: 'The profile covers construction, mechanical, electrical, telecom, IT and special products.' },
      { title: 'Project-interface knowledge', description: 'Material requirements can be discussed in the context of installation and site use.' },
      { title: 'Specification-led sourcing', description: 'The process records required performance and acceptable alternatives.' },
      { title: 'No blanket brand claims', description: 'Product availability and supplier status are confirmed only within the specific offer.' }
    ],
    outcome: 'A controlled technical supply package with clear product identity, quantity, approval basis and Kuwait delivery responsibility.',
    cta: 'Request a Technical Supply Quotation', secondaryCta: 'Send Your Material List', whatsapp: 'Hello Zenith Line, I need technical materials or project supply in Kuwait. I can share the BOQ, specifications, quantities, approved brands or equivalents, required documents and delivery location.', enquiryPrompt: 'Send the BOQ or item list, models and specifications, quantities, acceptable equivalents, required documents, Kuwait delivery point and required dates.',
    relatedSlugs: ['import-export', 'tools-equipment-rental', 'structured-cabling'],
    faqs: [
      { question: 'What technical products can Zenith Line supply in Kuwait?', answer: 'Requirements can include construction, mechanical, instrumentation, electrical, telecom, fibre, network, IT and selected industrial products. Availability, brand, origin, warranty route and delivery basis are confirmed for the actual item list.' },
      { question: 'Can I send a BOQ for quotation?', answer: 'Yes. Send the BOQ with drawings, specifications, quantities, approved manufacturers, acceptable-equivalent rules and required delivery dates. Zenith Line may request clarification where descriptions or units are ambiguous.' },
      { question: 'Can equivalent products be offered?', answer: 'An equivalent may be proposed only where alternatives are permitted and its relevant ratings, dimensions, standards and interfaces can be reviewed. The substitute should be clearly identified for client or consultant approval before order.' },
      { question: 'Does supply include delivery across Kuwait?', answer: 'Delivery coordination can be included to an agreed Kuwait destination. Vehicle access, offloading, storage, receiving hours, batch sequence and proof-of-delivery requirements should be stated because they affect the logistics scope.' },
      { question: 'Are warranties included with supplied products?', answer: 'Applicable manufacturer or supplier warranty information should be stated per product and sourcing route. The website does not promise a universal warranty. Installation conditions and unauthorized modification may affect coverage.' },
      { question: 'What information produces a useful supply quotation?', answer: 'Provide exact descriptions or models, quantities, specifications, standards, acceptable alternatives, required submittals, delivery point and dates. For replacements, include photos, nameplates and interface dimensions where available.' }
    ]
  },
  {
    slug: 'engineering-manpower', title: 'Engineering Solutions & Manpower in Kuwait', shortTitle: 'Engineering & Manpower', category: 'Trading & Support',
    seoTitle: 'Engineering Support & Manpower Kuwait', metaDescription: 'Discuss project-based engineering and manpower requirements in Kuwait by discipline, competency, duration, location, supervision and deliverables.',
    heroEyebrow: 'Project engineering and manpower support in Kuwait', summary: 'Project-oriented engineering and workforce support matched to the requested discipline, competency, duration and operating environment.',
    intro: 'Engineering and manpower support provides defined technical or workforce resources to a project, maintenance activity or deployment. Zenith Line can review civil, mechanical, electrical, telecom, IT, skilled and general workforce requirements described in its profile. Each request must state the discipline, competency, duties, location, duration, supervision model, working conditions and required records; no individual qualification is assumed until verified for the proposed resource.',
    overviewHeading: 'Match the Resource to the Actual Assignment', scopeHeading: 'Disciplines and Support That May Be Considered', applicationHeading: 'Projects That Need Additional Technical Capacity', considerationsHeading: 'What Determines the Resource Proposal?', processHeading: 'Define, Review, Mobilize and Manage',
    primaryKeyword: 'engineering manpower Kuwait', secondaryKeywords: ['engineering support Kuwait', 'technical manpower Kuwait', 'skilled workforce Kuwait', 'project manpower Kuwait'],
    image: '/images/site-consulting.webp', imageAlt: 'Engineer and project representative reviewing a large drawing on a construction site', imageWidth: 1600, imageHeight: 1068,
    detailImages: [{ src: '/images/project-design.webp', alt: 'Project planning desk with drawings, notes and measurement tools', width: 1469, height: 980, caption: 'Representative engineering-planning imagery.' }],
    customerProblems: [
      { title: 'A project has a temporary capability gap', description: 'A specific discipline or skill is needed for an approved period or work package.' },
      { title: 'Duties are not defined clearly', description: 'Titles alone do not explain deliverables, authority, tools or supervision.' },
      { title: 'Site conditions require particular competency', description: 'Industrial, construction and technology environments have different risks and expectations.' },
      { title: 'Mobilization information is incomplete', description: 'Location, shifts, transport, accommodation, PPE and onboarding responsibilities need clarity.' }
    ],
    scope: ['Civil engineering support', 'Mechanical and electrical resources', 'Telecom and IT specialists', 'Project-oriented technical support', 'Skilled trade workforce requirements', 'General workforce support where agreed'],
    deliverables: [
      { title: 'Role and competency brief', description: 'Defined duties, experience profile, documents, tools and reporting line.' },
      { title: 'Resource proposal', description: 'Available profile and commercial basis subject to client review and verification.' },
      { title: 'Mobilization coordination', description: 'Agreed location, date, access, induction and responsibility information.' },
      { title: 'Attendance or work records', description: 'Specified timesheets, reports or close-out information where included.' }
    ],
    suitableFor: [
      { title: 'Construction projects', description: 'Discipline-specific support for defined site and coordination duties.' },
      { title: 'Maintenance contracts', description: 'Resources matched to known assets, tasks, tools and work conditions.' },
      { title: 'Telecom and IT deployments', description: 'Technical personnel for cabling, equipment and system rollout activities.' },
      { title: 'Industrial operations', description: 'Project or shutdown support subject to competency and site requirements.' }
    ],
    technicalHeading: 'A Job Title Is Not a Complete Resource Specification',
    technicalIntro: 'Two requests for an “engineer” may require different discipline knowledge, software, authority, reporting, language, site access or documentation. The client should define responsibilities, minimum evidence, working pattern, tools and who directs the daily work. Licences, certifications or approvals are not implied and must be requested and verified where the assignment needs them.',
    considerations: [
      { title: 'Discipline and duties', description: 'The actual tasks and deliverables determine the required profile.' },
      { title: 'Competency evidence', description: 'Qualifications, experience or approvals must be specified where necessary.' },
      { title: 'Duration and work pattern', description: 'Start date, hours, shifts, days and extension options affect availability.' },
      { title: 'Location and conditions', description: 'Site access, heat, industrial rules and travel influence mobilization.' },
      { title: 'Supervision and tools', description: 'The responsible party for direction, equipment, PPE and consumables must be clear.' },
      { title: 'Records and commercial basis', description: 'Timesheets, reports, rates and overtime treatment need agreement.' }
    ],
    process: [
      { title: 'Define the assignment', description: 'Share discipline, duties, competency, location, schedule and reporting line.' },
      { title: 'Review proposed resources', description: 'Confirm profile evidence, availability and commercial responsibilities.' },
      { title: 'Coordinate mobilization', description: 'Arrange agreed access, induction, work pattern and site requirements.' },
      { title: 'Record and review', description: 'Use the agreed attendance, reporting and performance process.' }
    ],
    whyZenith: [
      { title: 'Multi-disciplinary context', description: 'The profile describes civil, mechanical, electrical, telecom and IT activities.' },
      { title: 'Assignment-led matching', description: 'The enquiry captures duties and competency rather than relying on a title.' },
      { title: 'Project support alignment', description: 'Resource needs can be discussed alongside materials, equipment and execution interfaces.' },
      { title: 'No unverified qualification claims', description: 'Specific credentials are checked against the assignment before proposal.' }
    ],
    outcome: 'A resource request defined by discipline, competency, duties, duration and responsibility rather than an ambiguous headcount.',
    cta: 'Request Engineering Resources', secondaryCta: 'Send a Manpower Requirement', whatsapp: 'Hello Zenith Line, I need engineering or manpower support in Kuwait. I can share the discipline, duties, quantity, competency requirements, location, duration, shift, supervision and mobilization needs.', enquiryPrompt: 'Send discipline and role, duties, number of resources, required evidence, location, start and duration, work pattern, supervision, tools, PPE and reporting needs.',
    relatedSlugs: ['construction-renovation', 'installation-support', 'tools-equipment-rental'],
    faqs: [
      { question: 'Which engineering disciplines can Zenith Line review?', answer: 'The company profile describes civil, mechanical, electrical, telecom and IT support. Availability and suitability depend on duties, competency evidence, duration, location and project conditions. A role title alone is not enough to confirm a resource.' },
      { question: 'Can I request skilled or general workforce support?', answer: 'Skilled and general workforce requirements can be discussed where the roles, quantities, duties, supervision and working conditions are clear. Exact availability and commercial terms are confirmed for the request.' },
      { question: 'How are qualifications and experience verified?', answer: 'The client should state the evidence required for the assignment. Proposed documents can then be reviewed before acceptance. The website does not claim that every available resource holds any particular certification, licence or approval.' },
      { question: 'Who supervises the manpower?', answer: 'Supervision depends on the contract model. The client, Zenith Line or an agreed responsible person may direct defined activities. Reporting lines, authority, safety responsibilities and daily instructions must be stated before mobilization.' },
      { question: 'What affects manpower pricing?', answer: 'Role, competency, quantity, duration, shift, overtime, location, transport, accommodation, tools, PPE, supervision, permits and reporting requirements can all affect the commercial basis. These items should be clarified rather than assumed.' },
      { question: 'What should I send for a manpower quotation?', answer: 'Provide role and discipline, detailed duties, resource count, required qualifications or approvals, project location, start date, duration, hours, shifts, supervision, tools, PPE, transport and timesheet or reporting needs.' }
    ]
  },
  {
    slug: 'tools-equipment-rental', title: 'Tools, Equipment & Machinery Support in Kuwait', shortTitle: 'Tools & Equipment', category: 'Trading & Support',
    seoTitle: 'Tools, Equipment & Machinery Support Kuwait', metaDescription: 'Request technical tools, test devices, machinery or selected equipment coordination in Kuwait by task, specification, quantity and duration.',
    heroEyebrow: 'Tools, test equipment and machinery support in Kuwait', summary: 'Technical tools, testing devices, machinery and selected rental coordination matched to the task, specification, quantity and duration.',
    intro: 'Tools and equipment support helps project teams obtain suitable equipment for a defined task without relying on a generic category name. Zenith Line can review professional tools, telecom and IT test devices, heavy equipment, machinery, trucks, toolkits and site-safety products described in its profile. Supply or rental availability, operator responsibility, inspection, transport, fuel and consumables must be confirmed for each item.',
    overviewHeading: 'Select Equipment from the Task, Not the Catalogue', scopeHeading: 'Equipment Support That May Be Available', applicationHeading: 'Teams That Need Task-Specific Equipment', considerationsHeading: 'What Determines Equipment Availability and Price?', processHeading: 'Specify, Verify, Coordinate and Return or Handover',
    primaryKeyword: 'tools equipment machinery Kuwait', secondaryKeywords: ['equipment rental Kuwait', 'technical tools Kuwait', 'test equipment Kuwait', 'construction machinery Kuwait'],
    image: '/images/civil-site.webp', imageAlt: 'Site team reviewing road and heavy civil work in Kuwait', imageWidth: 800, imageHeight: 429,
    detailImages: [{ src: illustration('tools-equipment'), alt: 'Technical illustration of test tools and site equipment organized for project use', width: 1200, height: 800, caption: 'Illustration representing task-specific tools and equipment support.' }],
    customerProblems: [
      { title: 'The equipment category is too broad', description: 'Capacity, reach, accuracy or interface must match the actual task.' },
      { title: 'A short project does not justify ownership', description: 'Selected rental or coordination may be more appropriate where available.' },
      { title: 'Accessories are overlooked', description: 'Leads, probes, blades, batteries, consumables and safety items affect usability.' },
      { title: 'Delivery and site access are difficult', description: 'Transport, lifting, permits and work-area constraints need early planning.' }
    ],
    scope: ['General and professional hand tools', 'Fibre, copper, network and power test devices', 'Heavy equipment and machinery enquiries', 'Truck and selected rental coordination', 'Technician and engineer toolkits', 'Site safety equipment and accessories'],
    deliverables: [
      { title: 'Task and specification review', description: 'Defined function, capacity, range, accuracy, quantity and required accessories.' },
      { title: 'Supply or rental proposal', description: 'Available equipment, condition basis, responsibility, duration and commercial terms.' },
      { title: 'Delivery or mobilization coordination', description: 'Agreed transport, access, receiving and operator arrangements.' },
      { title: 'Handover or return record', description: 'Included inspection, accessories and return condition where applicable.' }
    ],
    suitableFor: [
      { title: 'Construction teams', description: 'Tools and machinery aligned with site task, capacity and access.' },
      { title: 'Telecom technicians', description: 'Fibre, copper, LAN and related testing or installation equipment.' },
      { title: 'Industrial maintenance', description: 'Professional tools and test devices for known assets and conditions.' },
      { title: 'Short project requirements', description: 'Selected equipment coordination for a defined duration and work package.' }
    ],
    technicalHeading: 'Capacity, Accuracy and Accessories Define the Usable Tool',
    technicalIntro: 'A tester must support the required standard and interfaces; a machine must meet load, reach, terrain and access conditions. Calibration or inspection evidence may be required for controlled work and must be specified. For rental enquiries, responsibility for operator, transport, fuel, damage, overtime and return condition should be explicit before mobilization.',
    considerations: [
      { title: 'Task and performance', description: 'Load, reach, range, accuracy and duty cycle determine suitability.' },
      { title: 'Quantity and duration', description: 'Purchase, rental or coordination options depend on how many and for how long.' },
      { title: 'Site and access', description: 'Terrain, doorway, lift, road, permit and storage conditions affect selection.' },
      { title: 'Accessories and consumables', description: 'Usable delivery may require probes, leads, batteries, blades or safety items.' },
      { title: 'Inspection and calibration', description: 'Required evidence must be stated for measurement or regulated work.' },
      { title: 'Transport and operation', description: 'Delivery, operator, fuel, damage and return responsibilities affect the quote.' }
    ],
    process: [
      { title: 'Describe the task', description: 'Send equipment type, required capacity, quantity, location, duration and site conditions.' },
      { title: 'Confirm suitability and terms', description: 'Review model, accessories, evidence, transport and responsibility.' },
      { title: 'Supply or mobilize', description: 'Coordinate delivery and included checks for the approved equipment.' },
      { title: 'Handover or return', description: 'Complete agreed acceptance or return records and accessory checks.' }
    ],
    whyZenith: [
      { title: 'Broad project context', description: 'The company profile includes construction, telecom, IT, test and machinery requirements.' },
      { title: 'Task-led selection', description: 'Performance and site conditions are requested before equipment is proposed.' },
      { title: 'Supply and rental distinction', description: 'Availability and responsibility are confirmed item by item rather than implied.' },
      { title: 'Logistics coordination', description: 'Kuwait delivery, access and receiving needs can be included in the discussion.' }
    ],
    outcome: 'Tools or equipment identified against the actual task, performance, accessories, site conditions and agreed supply or rental responsibility.',
    cta: 'Request Tools or Equipment', secondaryCta: 'Send Equipment Specifications', whatsapp: 'Hello Zenith Line, I need tools, test equipment or machinery support in Kuwait. I can share the task, required capacity or model, quantity, location, duration, accessories and delivery needs.', enquiryPrompt: 'Send the task, equipment or model, capacity or range, quantity, Kuwait site, dates or duration, access, accessories, calibration or inspection needs and operator responsibility.',
    relatedSlugs: ['supply-logistics', 'engineering-manpower', 'civil-road-works'],
    faqs: [
      { question: 'What tools and equipment can Zenith Line source?', answer: 'Requirements can include professional hand tools, telecom and network testers, power test devices, toolkits, safety equipment, machinery and selected heavy equipment. Exact model, availability and commercial basis are confirmed for the request.' },
      { question: 'Does Zenith Line rent heavy equipment in Kuwait?', answer: 'Selected rental or rental-coordination requirements can be reviewed, but the website does not guarantee availability for every equipment type. Capacity, location, dates, operator, transport and site conditions are needed first.' },
      { question: 'Can you supply fibre or network testing devices?', answer: 'Testing-device requirements can be sourced against the required function, interfaces, range, standards and accessory list. State whether calibration or specific test-report capability is required.' },
      { question: 'What must be specified for machinery?', answer: 'Provide the task, material or load, required capacity, reach or dimensions, terrain, access, operating hours, duration and any operator or permit requirement. A generic machine name may not be enough for safe selection.' },
      { question: 'Are transport, fuel and operator included in rental pricing?', answer: 'These items vary and must be stated in the offer. Mobilization, demobilization, operator, fuel, overtime, standby, damage, cleaning and return condition can be separate responsibilities.' },
      { question: 'What information is needed for an equipment quotation?', answer: 'Send the task, preferred model or performance, quantity, location, dates, duration, accessories, site access, power or fuel, inspection or calibration needs and whether an operator is required.' }
    ]
  }
];
