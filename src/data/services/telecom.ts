import type { Service } from '../services';

const illustration = (name: string) => `/images/services/illustrations/${name}.webp`;

export const telecomServices: Service[] = [
  {
    slug: 'router-wifi', title: 'Business Router & Wi-Fi Solutions in Kuwait', shortTitle: 'Router & Wi-Fi', category: 'Telecom & IT',
    seoTitle: 'Business Wi-Fi & Router Solutions Kuwait', metaDescription: 'Plan reliable business Wi-Fi in Kuwait with coverage, capacity, access-point placement, staff and guest networks, testing and clear handover.',
    heroEyebrow: 'Business Wi-Fi planning and installation across Kuwait', summary: 'Business routing and wireless coverage planned around the building, user density, devices, applications and security requirements.',
    intro: 'Business Wi-Fi connects people and devices through routers, switches, cabling and correctly placed wireless access points. Zenith Line can assess coverage and capacity needs, recommend compatible equipment, configure staff and guest access, and test an agreed installation. The right design starts with the building and the way the network will be used—not simply the advertised range of one device.',
    overviewHeading: 'Reliable Coverage Starts with the Building', scopeHeading: 'What a Business Wi-Fi Scope May Include', applicationHeading: 'Where Managed Wireless Connectivity Is Used', considerationsHeading: 'What Affects a Wi-Fi Recommendation or Quotation?', processHeading: 'From Coverage Brief to Tested Wireless Access',
    primaryKeyword: 'business Wi-Fi installation Kuwait', secondaryKeywords: ['Wi-Fi site survey Kuwait', 'wireless access points Kuwait', 'office Wi-Fi Kuwait', 'router installation Kuwait'],
    image: illustration('business-wifi'), imageAlt: 'Technical illustration of business access points providing wireless coverage across rooms', imageWidth: 1200, imageHeight: 800,
    detailImages: [{ src: '/images/network-rack.webp', alt: 'Organized green data cables in a network cabinet supporting connected access points', width: 1152, height: 1536, caption: 'Representative wired infrastructure supporting a managed wireless network.' }],
    customerProblems: [
      { title: 'Weak coverage and dead zones', description: 'Walls, distance, interference and poor access-point placement leave important areas unreliable.' },
      { title: 'Unstable roaming', description: 'Users disconnect or remain attached to a distant access point while moving through the property.' },
      { title: 'Too many devices for consumer equipment', description: 'Capacity, management and operational visibility do not match business use.' },
      { title: 'Guest and internal access are mixed', description: 'Visitors, staff and operational devices need appropriate separation and policies.' }
    ],
    scope: ['Wi-Fi coverage and capacity assessment', 'Business routers and managed access points', 'Access-point placement planning', 'Staff, guest and device network separation', 'Roaming and channel configuration', 'Troubleshooting, testing and upgrades'],
    deliverables: [
      { title: 'Coverage and capacity findings', description: 'A review of layout, materials, users, devices, applications and current problem areas.' },
      { title: 'Equipment and placement recommendation', description: 'Proposed router, access-point count and positions subject to cabling, power and approved ecosystem.' },
      { title: 'Network configuration', description: 'Included wireless names, security, segmentation, roaming and management settings.' },
      { title: 'Testing and handover information', description: 'Agreed coverage checks, configuration summary and access information handled securely.' }
    ],
    suitableFor: [
      { title: 'Offices and multi-floor workplaces', description: 'Coverage and roaming aligned with rooms, meeting areas and user movement.' },
      { title: 'Warehouses and operational sites', description: 'Connectivity planned around high spaces, shelving, handheld devices and work zones.' },
      { title: 'Retail and hospitality', description: 'Separate staff, operational and guest connectivity with suitable capacity.' },
      { title: 'Schools and residential compounds', description: 'Multiple rooms, users and shared areas requiring planned access-point placement.' }
    ],
    technicalHeading: 'Access-Point Placement Is a Building Decision',
    technicalIntro: 'Concrete, blockwork, metal shelving, reflective surfaces and ceiling conditions change radio performance. User count and application type determine capacity, while existing cabling and Power over Ethernet affect where access points can be installed. A survey may combine drawings, observations, measurements and post-installation checks depending on project size.',
    considerations: [
      { title: 'Property size and floors', description: 'Area, levels and room arrangement establish the coverage problem.' },
      { title: 'Walls, ceilings and obstructions', description: 'Construction materials and shelving affect signal loss and placement.' },
      { title: 'Users, devices and applications', description: 'Browsing, voice, video and operational systems create different capacity needs.' },
      { title: 'Existing cabling and power', description: 'Ethernet routes, cabinets and PoE availability influence access-point positions.' },
      { title: 'Security and segmentation', description: 'Staff, guests, IoT and sensitive devices may require separate networks and controls.' },
      { title: 'Equipment ecosystem', description: 'Existing routers, switches, management tools and client preferences affect compatibility.' }
    ],
    process: [
      { title: 'Map users and problem areas', description: 'Share the floor plan, areas without service, user count, devices and important applications.' },
      { title: 'Assess the building and network', description: 'Review materials, interference, cabling, internet handoff, current equipment and security needs.' },
      { title: 'Install and configure', description: 'Place approved equipment and apply the agreed wireless, routing and segmentation settings.' },
      { title: 'Test and hand over', description: 'Check agreed areas, roaming and access, then provide the included configuration information.' }
    ],
    whyZenith: [
      { title: 'Network and cabling coordination', description: 'Wireless design can be considered together with structured cabling, racks and switching interfaces.' },
      { title: 'Building-led assessment', description: 'Recommendations reflect layout, construction and actual connected-device demand.' },
      { title: 'Supply plus configuration', description: 'Equipment, installation and setup can be combined where the approved scope includes them.' },
      { title: 'Kuwait-wide enquiry path', description: 'Property information and coverage symptoms can be sent directly through WhatsApp.' }
    ],
    outcome: 'A maintainable wireless network configured around real coverage, capacity, access and security requirements.',
    cta: 'Request a Wi-Fi Site Survey', secondaryCta: 'Send Wi-Fi Problem Details', whatsapp: 'Hello Zenith Line, I would like to enquire about Router & Wi-Fi in Kuwait. I can share the property area, floor plan, user and device count, current equipment and coverage problems.', enquiryPrompt: 'Send the Kuwait area, property type, floor count and size, floor plan, users and devices, applications, current internet and network equipment, dead zones and cabling details.',
    relatedSlugs: ['structured-cabling', 'network-security', 'installation-support'],
    faqs: [
      { question: 'Does Zenith Line install business Wi-Fi across Kuwait?', answer: 'Zenith Line can review business router and Wi-Fi requirements across Kuwait, subject to site location, scope and scheduling. The service can include assessment, equipment supply, access-point installation, configuration and testing when these items are stated in the quotation.' },
      { question: 'Can you assess Wi-Fi dead zones?', answer: 'Yes. Share a floor plan and mark weak or unreliable areas, then provide current equipment and user details. A site survey may be recommended to observe construction materials, interference, mounting options and existing cabling before access-point locations are proposed.' },
      { question: 'What is the difference between a router and a wireless access point?', answer: 'A router directs traffic between the local network and other networks, commonly including the internet. A wireless access point provides Wi-Fi access to the wired network. Business properties often use one routing platform with multiple managed access points rather than relying on one all-in-one device for the whole building.' },
      { question: 'Can staff and guest Wi-Fi be separated?', answer: 'Yes, compatible equipment can support separate wireless networks and policies for staff, guests or devices. Proper separation may also require VLANs, managed switches and firewall rules. The exact design depends on the existing infrastructure and the level of access each group needs.' },
      { question: 'Can Zenith Line upgrade an existing Wi-Fi network?', answer: 'An upgrade can retain compatible equipment or replace parts that limit coverage, capacity, management or security. Provide models, configuration access arrangements, floor plans and current symptoms. The assessment should identify what can remain before new equipment is recommended.' },
      { question: 'What information is required for a Wi-Fi quotation?', answer: 'Send the property type, Kuwait area, approximate size and floors, user and device count, key applications, floor plan, existing cabling, current router and access points, security needs and dead zones. A survey is often useful for multi-floor, high-density or difficult buildings.' },
      { question: 'Is a Wi-Fi site survey always needed?', answer: 'Not every small requirement needs the same survey depth, but a site review is valuable where layout, materials, interference, device density or existing cabling are uncertain. The survey method should match the risk and scale of the property.' }
    ]
  },
  {
    slug: 'structured-cabling', title: 'Structured Cabling Installation in Kuwait', shortTitle: 'Structured Cabling', category: 'Telecom & IT',
    seoTitle: 'Structured Cabling Installation Kuwait', metaDescription: 'Plan Cat6, Cat6A or fibre cabling in Kuwait with containment, racks, termination, labelling, testing and maintainable handover information.',
    heroEyebrow: 'Copper and fibre cabling across Kuwait', summary: 'Organized copper and fibre connectivity with racks, containment, termination, labelling and agreed testing for commercial and operational sites.',
    intro: 'Structured cabling is the fixed physical foundation that connects workstations, access points, phones, cameras and network equipment. Zenith Line can plan and install copper and fibre links, racks, patch panels, outlets and containment according to the approved scope. A maintainable installation depends on route planning, separation, labelling, bend radius, termination quality and records—not cable alone.',
    overviewHeading: 'A Maintainable Foundation for Every Connection', scopeHeading: 'Cabling Infrastructure That May Be Included', applicationHeading: 'Where Structured Cabling Supports Operations', considerationsHeading: 'What Affects a Cabling Scope and Quotation?', processHeading: 'Survey, Route, Terminate and Test',
    primaryKeyword: 'structured cabling Kuwait', secondaryKeywords: ['Cat6 cabling Kuwait', 'fibre optic cabling Kuwait', 'network cabling contractor Kuwait', 'data rack installation Kuwait'],
    image: '/images/network-rack.webp', imageAlt: 'Organized data cables routed through a network cabinet', imageWidth: 1152, imageHeight: 1536,
    detailImages: [{ src: illustration('structured-cabling'), alt: 'Technical illustration of a rack connected to data outlets and wireless access points', width: 1200, height: 800, caption: 'Illustration of a structured star-cabling layout.' }],
    customerProblems: [
      { title: 'Unlabelled and difficult-to-trace cables', description: 'Moves and faults take longer because endpoints and patching are unclear.' },
      { title: 'New devices have no suitable connection', description: 'Access points, phones, cameras or desks need planned links and power support.' },
      { title: 'Cabling routes conflict with the building', description: 'Ceilings, fire barriers, power services and finished areas constrain containment.' },
      { title: 'The rack has no growth or management space', description: 'Patching, equipment, cooling and cable radius need a workable cabinet layout.' }
    ],
    scope: ['Cat6 and Cat6A copper cabling', 'Fibre-optic backbone links', 'Racks, cabinets and patch panels', 'Outlets, termination and patching', 'Cable trays, trunking and containment', 'Labelling, testing and records'],
    deliverables: [
      { title: 'Outlet and route plan', description: 'Agreed endpoints, cabinet locations and practical pathways based on the property.' },
      { title: 'Installed passive infrastructure', description: 'Included cable, containment, racks, panels, outlets and accessories.' },
      { title: 'Termination and identification', description: 'Consistent endpoint and patch-panel labelling for maintainability.' },
      { title: 'Test and handover package', description: 'Specified test results, schedules or as-built information where included.' }
    ],
    suitableFor: [
      { title: 'Corporate offices', description: 'Desk, meeting-room, access-point, voice and security connections.' },
      { title: 'Warehouses and campuses', description: 'Long routes, fibre backbones, cabinets and operational endpoints.' },
      { title: 'Retail and hospitality', description: 'Point-of-sale, Wi-Fi, voice, cameras and management systems.' },
      { title: 'Data and telecom rooms', description: 'Organized racks, patching, backbone links and expansion planning.' }
    ],
    technicalHeading: 'Cable Category Is Only One Design Choice',
    technicalIntro: 'Distance, bandwidth, environment, pathway capacity, electromagnetic separation, fire stopping, PoE demand and endpoint density affect the design. Fibre may be appropriate between buildings or cabinets, while copper serves many endpoints. Product category, installation practice and test method need to agree if a performance result is required.',
    considerations: [
      { title: 'Outlet count and locations', description: 'Endpoint schedules and growth allowance establish quantities.' },
      { title: 'Cable type and distance', description: 'Application, length and environment influence copper or fibre selection.' },
      { title: 'Routes and containment', description: 'Ceiling access, risers, fire barriers and occupied finishes affect labour and materials.' },
      { title: 'Rack and power environment', description: 'Cabinet size, patching, active equipment, UPS and cooling need coordination.' },
      { title: 'Testing standard', description: 'Continuity, qualification or certification requirements must be stated.' },
      { title: 'Documentation', description: 'Label scheme, outlet schedule and as-built expectations affect handover effort.' }
    ],
    process: [
      { title: 'Count and locate endpoints', description: 'Share drawings, device types, cabinet locations and growth expectations.' },
      { title: 'Survey pathways', description: 'Review routes, distances, containment, access, separation and building interfaces.' },
      { title: 'Install and terminate', description: 'Complete approved pathways, cable pulling, mounting, termination and labelling.' },
      { title: 'Test and document', description: 'Perform the agreed test level and provide included schedules or records.' }
    ],
    whyZenith: [
      { title: 'Copper, fibre and network scope', description: 'Structured cabling and network installation are supported by the supplied profile and product categories.' },
      { title: 'End-to-end coordination', description: 'Cabling can be aligned with racks, Wi-Fi, voice and security systems.' },
      { title: 'Maintainability focus', description: 'Routes, labels, patching and handover are treated as part of the usable installation.' },
      { title: 'Supply and installation options', description: 'Materials and execution can be combined when expressly included.' }
    ],
    outcome: 'A labelled, tested-to-scope and maintainable passive network foundation ready for the connected systems it must support.',
    cta: 'Discuss Your Cabling Requirement', secondaryCta: 'Request a Cabling Survey', whatsapp: 'Hello Zenith Line, I need structured cabling in Kuwait. I can share the site, floor plan, outlet count, device types, cable preference, rack locations and required testing.', enquiryPrompt: 'Send the Kuwait area, floor plans, outlet or device count, cabinet locations, copper or fibre requirement, pathway condition, testing standard and target use.',
    relatedSlugs: ['router-wifi', 'voip-voice', 'installation-support'],
    faqs: [
      { question: 'Does Zenith Line install Cat6 and Cat6A cabling in Kuwait?', answer: 'Zenith Line can review Cat6, Cat6A and associated structured-cabling requirements across Kuwait. The selected category, components, test level and route must match the application and approved specification. Exact brands and performance obligations are confirmed in the quotation.' },
      { question: 'Do you install fibre-optic cabling?', answer: 'Fibre links can be included for backbones, longer distances or suitable high-capacity connections. The fibre type, core count, termination, pathway, equipment interfaces and testing must be specified or agreed for the project.' },
      { question: 'Are racks, patch panels and outlets included?', answer: 'They can be supplied and installed as part of a complete passive network package. Cabinet size, patch-panel density, cable management, power, active equipment and future capacity should be reviewed before the rack schedule is finalized.' },
      { question: 'Will every cable be labelled and tested?', answer: 'Labelling and an agreed level of testing should be stated in the quotation. The client should specify whether simple continuity, qualification or formal certification results are required. Handover records should correspond to the approved outlet schedule.' },
      { question: 'Can cabling be installed in an occupied office?', answer: 'It may be possible with agreed access, protection, ceiling opening, noise and working-hour controls. Routes through finished spaces and active work areas often require additional planning. Share the operational restrictions before the quotation is prepared.' },
      { question: 'What is needed for a structured cabling quotation?', answer: 'Provide floor plans, outlet count and locations, connected device types, cabinet locations, preferred cable or specification, pathway information and required testing. A site survey helps verify route lengths, ceiling access, containment and building interfaces.' }
    ]
  },
  {
    slug: 'voip-voice', title: 'VoIP & Business Voice Solutions in Kuwait', shortTitle: 'VoIP & Voice', category: 'Telecom & IT',
    seoTitle: 'VoIP & Business Voice Solutions Kuwait', metaDescription: 'Plan business VoIP in Kuwait with extensions, call routing, IVR, gateways, network readiness, system configuration and clear user handover.',
    heroEyebrow: 'Business voice and VoIP solutions in Kuwait', summary: 'IP calling, extensions, IVR, call routing and gateway integration planned around users, workflows, connectivity and existing numbers.',
    intro: 'VoIP carries business calls over an IP network and can connect extensions, departments and compatible locations through defined call flows. Zenith Line can review IP phones, extensions, IVR, routing, gateways and migration support. A successful voice project also depends on internet or carrier services, network readiness, numbering, power continuity and clear ownership of configuration.',
    overviewHeading: 'Call Flows Designed Around Real Business Conversations', scopeHeading: 'Voice-System Elements That May Be Included', applicationHeading: 'Teams That Depend on Structured Call Handling', considerationsHeading: 'What Shapes the Voice Solution and Quote?', processHeading: 'Map Calls, Prepare the Network, Configure and Handover',
    primaryKeyword: 'VoIP solutions Kuwait', secondaryKeywords: ['business phone system Kuwait', 'IP phone installation Kuwait', 'IVR system Kuwait', 'office voice solution'],
    image: illustration('business-voice'), imageAlt: 'Technical illustration of IP phones linked through a business voice network', imageWidth: 1200, imageHeight: 800,
    detailImages: [{ src: '/images/network-rack.webp', alt: 'Network cabinet with organized cabling supporting IP voice services', width: 1152, height: 1536, caption: 'IP voice depends on suitable network infrastructure and power.' }],
    customerProblems: [
      { title: 'Calls reach the wrong person', description: 'Extensions, queues and routing do not reflect how the business handles enquiries.' },
      { title: 'The system is difficult to expand', description: 'Adding users or locations exposes limitations in numbering, licensing or infrastructure.' },
      { title: 'Voice quality is inconsistent', description: 'Network congestion, connectivity, power or configuration may affect calls.' },
      { title: 'Migration risks interrupt operations', description: 'Numbers, gateways, phones and user behavior need a planned transition.' }
    ],
    scope: ['IP phones and user extensions', 'IVR and call-routing configuration', 'Queues, groups and business-hour rules', 'Compatible voice gateways', 'Migration and number coordination support', 'User setup and agreed handover'],
    deliverables: [
      { title: 'Call-flow and user schedule', description: 'Agreed extensions, departments, incoming routes and operational rules.' },
      { title: 'System and network recommendation', description: 'A compatible platform and supporting infrastructure proposal.' },
      { title: 'Configuration and deployment', description: 'Included phones, users, IVR, routing and gateway settings.' },
      { title: 'Testing and user handover', description: 'Agreed inbound, outbound and internal tests plus basic administration information.' }
    ],
    suitableFor: [
      { title: 'Corporate offices', description: 'Extensions, departments, reception and internal call transfer.' },
      { title: 'Customer-service teams', description: 'Queues, groups, announcements and defined enquiry routing.' },
      { title: 'Retail and hospitality', description: 'Front desk, back office and operational voice coordination.' },
      { title: 'Multi-location businesses', description: 'Compatible site connectivity and extension planning across locations.' }
    ],
    technicalHeading: 'Voice Quality Relies on More Than the Telephone',
    technicalIntro: 'Switching, cabling, internet or private connectivity, quality-of-service settings, firewall behavior and backup power can affect IP calling. Carrier services and number portability are separate dependencies that must be clarified. Before configuration, the client should define how calls enter, where they go, what happens when unanswered and who will administer daily changes.',
    considerations: [
      { title: 'Users and extensions', description: 'Current headcount, shared phones and growth establish system scale.' },
      { title: 'Call flows and hours', description: 'IVR, queues, departments, overflow and after-hours rules require decisions.' },
      { title: 'Numbers and carrier service', description: 'Existing lines, SIP or gateway requirements depend on provider arrangements.' },
      { title: 'Network readiness', description: 'LAN, internet, QoS, firewall and cabling condition influence performance.' },
      { title: 'Devices and integrations', description: 'Phones, soft clients, headsets and compatible systems affect selection.' },
      { title: 'Administration and continuity', description: 'User permissions, backup power and support expectations shape handover.' }
    ],
    process: [
      { title: 'Map users and calls', description: 'List numbers, extensions, departments, call volumes and desired routing.' },
      { title: 'Check network and compatibility', description: 'Review connectivity, switching, firewall, cabling, power and retained equipment.' },
      { title: 'Configure and migrate', description: 'Build approved users and call flows, then coordinate the agreed cutover.' },
      { title: 'Test and explain', description: 'Verify key routes and provide included user or administrator guidance.' }
    ],
    whyZenith: [
      { title: 'Voice and network capability', description: 'The site offering combines VoIP with cabling, routers and wider telecom support.' },
      { title: 'Workflow-led call design', description: 'Extension and routing decisions begin with how the organization handles calls.' },
      { title: 'Infrastructure coordination', description: 'Voice endpoints can be considered with switching, firewall, cabling and power dependencies.' },
      { title: 'Defined handover', description: 'Testing and administration information can be specified rather than assumed.' }
    ],
    outcome: 'A voice environment configured around users, call flows, network readiness and clearly defined migration and handover responsibilities.',
    cta: 'Discuss a Business Voice Solution', secondaryCta: 'Send Your Call Flow', whatsapp: 'Hello Zenith Line, I would like to discuss VoIP and business voice in Kuwait. I can share user count, current numbers and system, desired call flow, locations and network details.', enquiryPrompt: 'Send the number of users and sites, current system and numbers, desired IVR and routing, call volumes, network details, retained equipment and migration constraints.',
    relatedSlugs: ['pbx-telephone-exchange', 'structured-cabling', 'network-security'],
    faqs: [
      { question: 'What is a VoIP business phone system?', answer: 'A VoIP system carries voice over an IP network and can provide extensions, call routing, IVR, groups and compatible software or desk phones. External calling still depends on suitable carrier or gateway arrangements.' },
      { question: 'Can existing business numbers be retained?', answer: 'Number retention depends on the carrier, service type and migration arrangement, so it cannot be guaranteed by the website. Share the current provider, line type and numbers so the required coordination can be identified.' },
      { question: 'Can an IVR route calls to departments?', answer: 'Yes, compatible systems can present menu options and route calls to extensions, groups or queues. The client should define wording, languages, business hours, overflow and unanswered-call behavior before configuration.' },
      { question: 'Does VoIP require new network cabling?', answer: 'Existing cabling may be usable if it is suitable, tested and reaches the required phone locations. Switching, PoE, VLANs and network capacity should also be checked. A survey can determine what may be retained.' },
      { question: 'Can VoIP connect more than one office?', answer: 'Compatible systems can support users across connected locations, subject to internet or private-network quality, firewall policy, system licensing and security. Each site should be assessed for connectivity and continuity needs.' },
      { question: 'What is needed for a VoIP quotation?', answer: 'Provide user and site counts, current numbers and system, desired call flows, IVR needs, call volume, existing phones, network equipment, cabling and carrier information. Note any cutover window or operations that cannot be interrupted.' }
    ]
  },
  {
    slug: 'pbx-telephone-exchange', title: 'PBX & Telephone Exchange Solutions in Kuwait', shortTitle: 'PBX / Telephone Exchange', category: 'Telecom & IT',
    seoTitle: 'PBX & Telephone Exchange Solutions Kuwait', metaDescription: 'Assess IP-PBX or existing telephone exchange requirements in Kuwait, including extensions, migration, analog interfaces and call routing.',
    heroEyebrow: 'PBX and telephone exchange services in Kuwait', summary: 'PBX assessment, extension planning, installation and migration for organizations with IP, digital or analog telephone requirements.',
    intro: 'A PBX is the system that manages internal extensions and controls how calls enter, leave and move through an organization. Zenith Line can assess IP-PBX and compatible existing telephone environments, plan extensions, configure routing and support an agreed migration. The recommended approach depends on existing handsets, analog devices, carrier lines, network condition and business workflow.',
    overviewHeading: 'Modernize the Exchange Without Losing the Workflow', scopeHeading: 'PBX Scope That May Be Included', applicationHeading: 'Organizations That Use Central Telephone Management', considerationsHeading: 'What Determines the PBX Approach?', processHeading: 'Audit, Design, Migrate and Stabilize',
    primaryKeyword: 'PBX telephone exchange Kuwait', secondaryKeywords: ['IP PBX Kuwait', 'telephone system Kuwait', 'PBX installation Kuwait', 'office telephone exchange'],
    image: illustration('pbx-exchange'), imageAlt: 'Technical illustration of a PBX exchange connecting office extensions and outside lines', imageWidth: 1200, imageHeight: 800,
    detailImages: [{ src: '/images/network-rack.webp', alt: 'Telecom and network cabinet with organized cabling', width: 1152, height: 1536, caption: 'Representative cabinet infrastructure for connected communications systems.' }],
    customerProblems: [
      { title: 'The existing exchange is difficult to support', description: 'Expansion, parts, administration or compatibility may be limiting operations.' },
      { title: 'Extension records are unclear', description: 'Users, ports, numbers and analog devices have not been documented.' },
      { title: 'A migration must retain essential functions', description: 'Reception, lifts, gates, fax or other interfaces may need separate review.' },
      { title: 'Call handling no longer fits the business', description: 'Departments, office hours and overflow routes have changed.' }
    ],
    scope: ['IP-PBX system assessment and deployment', 'Existing exchange and extension audit', 'Analog, digital and IP endpoint review', 'Extension and call-routing configuration', 'Migration and cutover support', 'Expansion and agreed technical support'],
    deliverables: [
      { title: 'Existing-system inventory', description: 'Known lines, extensions, handsets, gateways and special analog endpoints.' },
      { title: 'Migration or expansion plan', description: 'Proposed retained items, replacements, dependencies and cutover sequence.' },
      { title: 'Installed and configured exchange', description: 'Approved users, extensions, routes and included devices.' },
      { title: 'Test and administration handover', description: 'Key call tests and agreed basic system information.' }
    ],
    suitableFor: [
      { title: 'Offices and institutions', description: 'Reception, departments and internal extensions under one managed system.' },
      { title: 'Hotels and hospitality', description: 'Guest, front-desk and operational extension requirements subject to integration.' },
      { title: 'Warehouses and industrial sites', description: 'Distributed offices, security points and operational telephone locations.' },
      { title: 'Multi-department organizations', description: 'Defined routing, numbering and administration across teams.' }
    ],
    technicalHeading: 'Legacy Interfaces Need to Be Found Before Cutover',
    technicalIntro: 'An old exchange may connect more than office handsets. Fax, door phones, paging, lifts, gates or other analog devices can rely on specific ports or line behavior. An audit should record these endpoints, carrier services and numbering before a migration plan is approved. IP-PBX options also depend on the LAN, power and security environment.',
    considerations: [
      { title: 'Existing exchange and phones', description: 'Models, licenses, cards, ports and condition affect retention options.' },
      { title: 'Extension and line inventory', description: 'Users, direct numbers, trunks and spare capacity define scale.' },
      { title: 'Analog and specialist endpoints', description: 'Fax, lifts, gates and paging interfaces may require gateways or separate treatment.' },
      { title: 'Call-routing workflow', description: 'Reception, groups, IVR, hours and overflow must be documented.' },
      { title: 'Network and power', description: 'IP phones and exchange equipment require suitable LAN, PoE and continuity planning.' },
      { title: 'Cutover risk', description: 'Testing, fallback and carrier coordination influence the migration programme.' }
    ],
    process: [
      { title: 'Inventory the current exchange', description: 'Record lines, extensions, phones, analog devices, faults and desired changes.' },
      { title: 'Design the target system', description: 'Confirm retained components, platform, gateways, routing and infrastructure needs.' },
      { title: 'Configure and cut over', description: 'Prepare the system, test key paths and move users under the agreed sequence.' },
      { title: 'Verify and hand over', description: 'Confirm critical calls and provide the included administration guidance.' }
    ],
    whyZenith: [
      { title: 'PBX and VoIP coordination', description: 'The service is positioned within a wider business voice and network offering.' },
      { title: 'Legacy-aware assessment', description: 'Existing exchange, analog devices and migration dependencies are reviewed first.' },
      { title: 'Infrastructure view', description: 'Cabling, switching, routing and power interfaces can be identified in one scope discussion.' },
      { title: 'Clear migration inputs', description: 'The enquiry asks for the details that affect compatibility and cutover.' }
    ],
    outcome: 'A manageable telephone exchange aligned with current users, retained interfaces, call workflows and an agreed migration plan.',
    cta: 'Request a PBX Assessment', secondaryCta: 'Send Exchange Details', whatsapp: 'Hello Zenith Line, I need a PBX or telephone exchange assessment in Kuwait. I can share the current system, line and extension count, phone models, analog devices and required changes.', enquiryPrompt: 'Send the current PBX model, carrier and lines, user and extension count, phone types, analog devices, faults, desired call flow and cutover constraints.',
    relatedSlugs: ['voip-voice', 'structured-cabling', 'installation-support'],
    faqs: [
      { question: 'What is the difference between a PBX and VoIP?', answer: 'A PBX manages extensions and call routing. VoIP describes carrying voice over IP networks. An IP-PBX combines PBX functions with IP endpoints and connectivity, while older exchanges may use analog or digital interfaces.' },
      { question: 'Can Zenith Line assess an existing telephone exchange?', answer: 'Yes. Provide the PBX model, line and extension count, phone types, cards or gateways, known faults and desired changes. Site access and configuration credentials may be required for a useful technical assessment.' },
      { question: 'Can analog phones or devices be retained?', answer: 'Some analog devices may be retained through compatible ports or gateways, but behavior and support must be checked. Fax, lift phones, door systems and paging interfaces should be identified individually before migration.' },
      { question: 'Can a PBX be expanded with more extensions?', answer: 'Expansion depends on platform capacity, licenses, available ports, network readiness and phone compatibility. An audit can determine whether expansion is practical or a staged replacement should be considered.' },
      { question: 'How can a PBX migration reduce disruption?', answer: 'A migration plan should inventory endpoints, prepare configuration, test carrier and internal routes, define a cutover window and identify fallback actions. Critical extensions and special devices need explicit testing.' },
      { question: 'What is required for a PBX quotation?', answer: 'Share the current system model, carrier service, external lines, extensions, handset types, analog devices, desired features, network details and migration constraints. Photos of the exchange and rack can help the initial review.' }
    ]
  },
  {
    slug: 'network-security', title: 'Business Network Security Solutions in Kuwait', shortTitle: 'Network Security', category: 'Telecom & IT',
    seoTitle: 'Business Network Security Solutions Kuwait', metaDescription: 'Review firewall, VPN, network segmentation and access-control requirements in Kuwait around users, devices, applications and existing infrastructure.',
    heroEyebrow: 'Network security infrastructure for Kuwait organizations', summary: 'Firewall, segmentation, VPN and controlled network access planned around users, devices, applications and operational risk.',
    intro: 'Network security controls which users, devices and services can communicate and how remote connections reach business systems. Zenith Line can review firewall deployment, VLAN segmentation, VPN, access-control and supporting infrastructure requirements. This is an infrastructure and configuration service; broader cybersecurity governance, monitoring obligations and specialist compliance work must be defined separately where required.',
    overviewHeading: 'Reduce Exposure by Defining Who Can Reach What', scopeHeading: 'Security Infrastructure That May Be Included', applicationHeading: 'Networks That Need Controlled Access', considerationsHeading: 'What Shapes the Security Architecture?', processHeading: 'Discover, Segment, Configure and Verify',
    primaryKeyword: 'network security solutions Kuwait', secondaryKeywords: ['business firewall Kuwait', 'VPN setup Kuwait', 'network segmentation Kuwait', 'firewall installation Kuwait'],
    image: illustration('network-security'), imageAlt: 'Technical illustration of a firewall shield protecting segmented business networks', imageWidth: 1200, imageHeight: 800,
    detailImages: [{ src: '/images/network-rack.webp', alt: 'Network cabinet with organized data cabling', width: 1152, height: 1536, caption: 'Security configuration relies on known, maintainable network infrastructure.' }],
    customerProblems: [
      { title: 'Every device shares one flat network', description: 'Staff, guests, cameras and operational devices can reach more than they need.' },
      { title: 'Remote access is informal', description: 'Users connect without a defined VPN, authentication or access policy.' },
      { title: 'Firewall rules are poorly understood', description: 'Old changes remain without clear purpose, ownership or documentation.' },
      { title: 'New systems increase exposure', description: 'Cloud, branches, cameras or IoT devices introduce new communication paths.' }
    ],
    scope: ['Firewall deployment and replacement', 'VLAN and network segmentation', 'VPN and controlled remote access', 'Network access-policy configuration', 'Security-device integration', 'Agreed configuration review and support'],
    deliverables: [
      { title: 'Network and access discovery', description: 'Known users, devices, subnets, internet links, services and remote-access needs.' },
      { title: 'Segmentation and firewall proposal', description: 'Defined zones, permitted flows, equipment and dependencies.' },
      { title: 'Configuration and migration', description: 'Approved rules, VLANs, VPN and interface settings within the agreed scope.' },
      { title: 'Verification and documentation', description: 'Agreed connectivity tests and a configuration or rule summary handled securely.' }
    ],
    suitableFor: [
      { title: 'Corporate offices', description: 'Staff, guest, server, printer and management access separated appropriately.' },
      { title: 'Retail and hospitality', description: 'Guest, payment, operational and back-office devices with different trust levels.' },
      { title: 'Warehouses and operational sites', description: 'Handheld, camera, automation and office networks requiring controlled paths.' },
      { title: 'Organizations with remote users', description: 'Defined VPN access to only the required internal resources.' }
    ],
    technicalHeading: 'A Firewall Is Effective Only When the Rules Reflect the Business',
    technicalIntro: 'Firewall model and throughput matter, but the rule set, network zones, identity controls, logging and maintenance are equally important. The assessment should identify internet speeds, applications, remote users, branch links, public services and devices that cannot be upgraded. Credentials and configuration records must be transferred securely, never through public page content.',
    considerations: [
      { title: 'Internet speed and traffic', description: 'Throughput, VPN, inspection features and growth affect equipment sizing.' },
      { title: 'Users, devices and zones', description: 'Staff, guests, servers, cameras and IoT need defined trust boundaries.' },
      { title: 'Applications and required flows', description: 'Business services must remain reachable through least-necessary access.' },
      { title: 'Remote and branch connectivity', description: 'VPN users, sites and authentication requirements affect design.' },
      { title: 'Existing network compatibility', description: 'Switches, VLANs, addressing and managed equipment influence implementation.' },
      { title: 'Logging and administration', description: 'Retention, alerts, access ownership and change control must be agreed.' }
    ],
    process: [
      { title: 'Discover assets and access', description: 'List users, devices, services, links, remote needs and current concerns.' },
      { title: 'Design zones and rules', description: 'Define the required communication paths, platform and migration assumptions.' },
      { title: 'Configure and transition', description: 'Apply approved segmentation, firewall and VPN settings with planned testing.' },
      { title: 'Verify and document', description: 'Confirm required access and provide included, securely handled records.' }
    ],
    whyZenith: [
      { title: 'Security within the network context', description: 'Firewall work can be reviewed with routing, switching, cabling and Wi-Fi dependencies.' },
      { title: 'Access-led design', description: 'Rules are developed from required users, devices and applications.' },
      { title: 'Migration awareness', description: 'Existing connectivity and retained equipment are identified before change.' },
      { title: 'Restrained scope language', description: 'The page distinguishes network-security infrastructure from broader assurance claims.' }
    ],
    outcome: 'A clearer network-security structure that limits unnecessary access while preserving documented business connectivity.',
    cta: 'Request a Network Security Review', secondaryCta: 'Send Firewall Requirements', whatsapp: 'Hello Zenith Line, I need a network security review in Kuwait. I can share the site count, users, internet speeds, current firewall and switches, remote access needs, applications and main concerns.', enquiryPrompt: 'Send sites, users, internet links, current firewall and switching, device groups, servers or applications, remote users, branch links and required security controls. Do not send passwords.',
    relatedSlugs: ['router-wifi', 'structured-cabling', 'installation-support'],
    faqs: [
      { question: 'Does Zenith Line install business firewalls in Kuwait?', answer: 'Zenith Line can review firewall supply, deployment, replacement and configuration requirements in Kuwait. The platform and scope depend on internet speed, users, VPN, required inspection features, network design and current equipment.' },
      { question: 'What is network segmentation?', answer: 'Segmentation divides devices into controlled network zones, such as staff, guests, servers, cameras or IoT. Firewall or routing rules then permit only required communication. It reduces unnecessary exposure but must be planned so business applications continue to work.' },
      { question: 'Can you configure VPN access for remote users?', answer: 'Compatible firewall and VPN solutions can support controlled remote access. User count, authentication, devices, required internal resources and internet connectivity should be defined. VPN does not remove the need for endpoint and account security.' },
      { question: 'Can an existing firewall be reviewed?', answer: 'A configuration and capacity review may be possible when the model, license status, network diagram and authorized access are available. The scope should state whether it covers rule review, firmware, VPN, migration or only troubleshooting.' },
      { question: 'Does this service guarantee cybersecurity?', answer: 'No single firewall or configuration can guarantee security. This service focuses on agreed network-security infrastructure and access controls. Governance, endpoint security, backups, monitoring, incident response, audits and compliance may require separate measures and specialist scope.' },
      { question: 'What information is needed for a security quotation?', answer: 'Provide site and user counts, internet speeds, firewall and switch models, network ranges or diagram, device groups, public services, remote users, VPN and branch needs, plus the main concerns. Do not send passwords or private keys through the enquiry form.' }
    ]
  },
  {
    slug: 'installation-support', title: 'Installation & Technical Support in Kuwait', shortTitle: 'Installation & Support', category: 'Telecom & IT',
    seoTitle: 'Network Installation & Technical Support Kuwait', metaDescription: 'Request scoped on-site network, telecom and IT installation or technical support in Kuwait for setup, troubleshooting, upgrades and handover.',
    heroEyebrow: 'On-site technical installation and support in Kuwait', summary: 'Scoped on-site installation, configuration, troubleshooting, upgrade and maintenance for network, telecom and related technical systems.',
    intro: 'Installation and technical support turns equipment and a reported requirement into a controlled site activity. Zenith Line can review network, telecom, security and related installation, configuration, testing, troubleshooting and upgrade needs. The service begins by identifying the system, symptoms, access, dependencies and desired outcome so that a one-off task, project package or agreed support scope can be defined.',
    overviewHeading: 'Start with the System, Symptom and Required Outcome', scopeHeading: 'Technical Activities That May Be Included', applicationHeading: 'When On-Site Technical Support Is Useful', considerationsHeading: 'What Affects the Support Scope?', processHeading: 'Triage, Attend, Resolve and Record',
    primaryKeyword: 'technical support Kuwait', secondaryKeywords: ['network installation Kuwait', 'on-site IT support Kuwait', 'network troubleshooting Kuwait', 'telecom technical support'],
    image: '/images/engineering-team.webp', imageAlt: 'Technical team members reviewing project information', imageWidth: 801, imageHeight: 1200,
    detailImages: [{ src: '/images/network-rack.webp', alt: 'Network rack ready for installation and technical configuration', width: 1152, height: 1536, caption: 'Representative network infrastructure from supplied assets.' }],
    customerProblems: [
      { title: 'Equipment has arrived but is not operational', description: 'Mounting, cabling, configuration and system dependencies need coordination.' },
      { title: 'A fault affects users but its cause is unclear', description: 'Symptoms need triage across power, cabling, network, configuration and provider services.' },
      { title: 'The site is expanding or moving', description: 'Existing equipment, new endpoints and cutover tasks require a defined sequence.' },
      { title: 'The rack or documentation is difficult to manage', description: 'Unclear patching and records increase future troubleshooting effort.' }
    ],
    scope: ['Equipment mounting and installation', 'Configuration and functional testing', 'Network and connectivity troubleshooting', 'Rack cleanup and selected upgrades', 'Agreed preventive maintenance tasks', 'Technical records and user handover'],
    deliverables: [
      { title: 'Triage and task definition', description: 'Clarification of affected system, symptoms, impact, access and required result.' },
      { title: 'On-site technical activity', description: 'Approved installation, configuration, tracing or troubleshooting steps.' },
      { title: 'Functional verification', description: 'Testing of the specific corrected or installed functions within scope.' },
      { title: 'Service notes or handover', description: 'Findings, changes and recommendations where included in the engagement.' }
    ],
    suitableFor: [
      { title: 'New offices and facilities', description: 'Installation and setup for approved network and telecom equipment.' },
      { title: 'Moves and expansions', description: 'Endpoint, rack and connectivity changes coordinated around a cutover.' },
      { title: 'Existing network upgrades', description: 'Replacement or reconfiguration after compatibility and impact review.' },
      { title: 'Defined maintenance needs', description: 'Agreed inspection and preventive tasks for known systems.' }
    ],
    technicalHeading: 'Good Troubleshooting Separates Symptoms from Causes',
    technicalIntro: 'A user-visible outage may originate in power, cabling, switching, routing, internet service, configuration or an application outside the local network. Useful triage records when the problem began, affected users, recent changes and what remains operational. Third-party provider faults, unsupported hardware and missing credentials may limit what can be completed during one visit.',
    considerations: [
      { title: 'System and equipment', description: 'Models, age, topology and support status affect preparation.' },
      { title: 'Symptoms and impact', description: 'Affected users, locations and functions help prioritize testing.' },
      { title: 'Recent changes', description: 'Moves, updates, power events or new equipment can narrow diagnosis.' },
      { title: 'Access and credentials', description: 'Authorized site and administrative access may be required; passwords should be transferred securely.' },
      { title: 'Spares and compatibility', description: 'Replacement parts and licensing can affect completion.' },
      { title: 'Third-party dependencies', description: 'Carriers, cloud services and vendor platforms may require separate coordination.' }
    ],
    process: [
      { title: 'Triage the request', description: 'Share system details, symptoms, impact, photos, recent changes and available access.' },
      { title: 'Confirm the visit scope', description: 'Identify likely tools, credentials, spares and third-party dependencies.' },
      { title: 'Install or troubleshoot', description: 'Perform approved checks and changes while recording material findings.' },
      { title: 'Verify and report', description: 'Test the agreed function and provide included notes or next recommendations.' }
    ],
    whyZenith: [
      { title: 'Wide technical context', description: 'The offering spans networks, cabling, voice, firewall and related installation interfaces.' },
      { title: 'Defined task boundaries', description: 'The system, issue and success condition are clarified before attendance.' },
      { title: 'Supply and replacement coordination', description: 'Compatible equipment or parts can be included where approved.' },
      { title: 'Practical handover', description: 'Changes and findings can be recorded when documentation is part of the scope.' }
    ],
    outcome: 'A scoped technical intervention with clear actions, functional checks and documented next steps where included.',
    cta: 'Request a Technical Site Visit', secondaryCta: 'Send Support Details', whatsapp: 'Hello Zenith Line, I need installation or technical support in Kuwait. I can share the site, system and equipment, symptoms, affected users, recent changes, photos and preferred access window.', enquiryPrompt: 'Send the Kuwait area, system type, equipment models, symptoms, affected users, when it began, recent changes, photos, available authorized access and third-party dependencies.',
    relatedSlugs: ['structured-cabling', 'router-wifi', 'network-security'],
    faqs: [
      { question: 'What technical systems can Zenith Line support?', answer: 'The service can cover agreed network, cabling, router, Wi-Fi, voice, PBX, firewall and related telecom or IT installation tasks. Support is subject to equipment compatibility, authorized access, available information and the defined engagement.' },
      { question: 'Can I request a one-off site visit?', answer: 'Yes, a one-off requirement can be reviewed. Share the site, system, symptoms, business impact, models, photos and access constraints. Zenith Line can then clarify whether remote triage, a survey or a prepared on-site visit is appropriate.' },
      { question: 'Can you install equipment supplied by the client?', answer: 'Client-supplied equipment may be considered after checking compatibility, condition, licensing, accessories, configuration access and the installation environment. The quotation should distinguish installation responsibility from manufacturer or supplier warranty.' },
      { question: 'Can you troubleshoot an intermittent network issue?', answer: 'Intermittent faults can be investigated, but they may require monitoring or repeated evidence rather than one observation. Record dates, times, affected users, applications, error messages and recent changes to help narrow the likely cause.' },
      { question: 'What should be available before a support visit?', answer: 'Provide authorized site access, an informed contact, equipment and network details, relevant credentials through a secure method, known provider information and a clear description of the desired outcome. Do not place passwords in the public enquiry form.' },
      { question: 'Do you provide ongoing maintenance?', answer: 'An agreed maintenance scope can be discussed for known systems. Equipment list, locations, task frequency, exclusions, escalation path, spares and documentation expectations need to be defined. The website does not promise a fixed SLA or response time.' }
    ]
  }
];
