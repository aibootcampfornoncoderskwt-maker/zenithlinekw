export type ServiceFaq = { question: string; answer: string };

export type ServiceCategory = 'Construction' | 'Structures' | 'MEP' | 'Telecom & IT' | 'Trading & Support';

export type ServicePoint = { title: string; description: string };

export type ServiceImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  category: ServiceCategory;
  seoTitle: string;
  metaDescription: string;
  heroEyebrow: string;
  summary: string;
  intro: string;
  overviewHeading: string;
  scopeHeading: string;
  applicationHeading: string;
  considerationsHeading: string;
  processHeading: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  directAnswer?: string;
  componentsSummary?: string;
  mainComponents?: string[];
  reassurance?: string;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  detailImages: ServiceImage[];
  customerProblems: ServicePoint[];
  scope: string[];
  deliverables: ServicePoint[];
  suitableFor: ServicePoint[];
  technicalHeading: string;
  technicalIntro: string;
  considerations: ServicePoint[];
  process: ServicePoint[];
  whyZenith: ServicePoint[];
  outcome: string;
  cta: string;
  secondaryCta: string;
  whatsapp: string;
  enquiryPrompt: string;
  relatedSlugs: string[];
  faqs: ServiceFaq[];
};

import { constructionServices } from './services/construction';
import { telecomServices } from './services/telecom';
import { supportServices } from './services/support';

const imageOverrides: Record<string, Pick<Service, 'image' | 'imageAlt' | 'imageWidth' | 'imageHeight' | 'detailImages'>> = {
  'wired-network': {
    image: '/images/services/illustrations/wired-network.webp',
    imageAlt: 'Business workstations linked through managed switching and organized network infrastructure',
    imageWidth: 1200,
    imageHeight: 800,
    detailImages: [{ src: '/images/services/illustrations/wired-network.webp', alt: 'Representative wired network connecting business endpoints through managed infrastructure', width: 1200, height: 800, caption: 'Representative wired-network environment; topology and equipment depend on the approved design.' }]
  },
  'structured-cabling': {
    image: '/images/services/structured-cabling-installation.webp',
    imageAlt: 'Organized Cat6 and Cat6A patch panels with separated cable management in a telecommunications room',
    imageWidth: 1200,
    imageHeight: 800,
    detailImages: [{ src: '/images/services/structured-cabling-installation.webp', alt: 'Close view of professionally routed copper patch cables and rack-mounted network equipment', width: 1200, height: 800, caption: 'Representative structured-cabling installation; equipment and cable layout vary by approved scope.' }]
  },
  'installation-support': {
    image: '/images/services/it-services-support.webp',
    imageAlt: 'IT technician using a laptop while inspecting business network infrastructure',
    imageWidth: 1200,
    imageHeight: 800,
    detailImages: [{ src: '/images/services/it-services-support.webp', alt: 'Technician troubleshooting rack-mounted business infrastructure with diagnostic equipment', width: 1200, height: 800, caption: 'Representative technical-support activity; equipment and work depend on the approved task.' }]
  },
  'network-security': {
    image: '/images/services/enterprise-network-security.webp',
    imageAlt: 'Rack-mounted enterprise firewall appliances in a controlled network operations environment',
    imageWidth: 1200,
    imageHeight: 800,
    detailImages: [{ src: '/images/services/enterprise-network-security.webp', alt: 'Enterprise security appliances with organized network connections and indistinct monitoring screens', width: 1200, height: 800, caption: 'Representative network-security infrastructure; controls and equipment depend on the approved design.' }]
  },
  'cctv-surveillance-systems': {
    image: '/images/services/illustrations/cctv-surveillance.webp',
    imageAlt: 'Outdoor CCTV cameras connected to network recording equipment',
    imageWidth: 1200,
    imageHeight: 800,
    detailImages: [{ src: '/images/services/illustrations/cctv-surveillance.webp', alt: 'Representative surveillance cameras connected to recording and monitoring equipment', width: 1200, height: 800, caption: 'Representative IP surveillance system; camera positions and equipment depend on the approved scope.' }]
  },
  'router-wifi': {
    image: '/images/services/business-wifi-installation.webp',
    imageAlt: 'Technician surveying ceiling-mounted enterprise access points in a commercial property',
    imageWidth: 1200,
    imageHeight: 800,
    detailImages: [{ src: '/images/services/business-wifi-installation.webp', alt: 'Commercial corridor with ceiling-mounted access points and a technician testing wireless coverage', width: 1200, height: 800, caption: 'Representative wireless site survey; access-point count and placement depend on the property.' }]
  },
  'pbx-telephone-exchange': {
    image: '/images/services/pbx-ip-telephone.webp',
    imageAlt: 'Professional IP desk phones beside rack-mounted PBX and voice gateway equipment',
    imageWidth: 1200,
    imageHeight: 800,
    detailImages: [{ src: '/images/services/pbx-ip-telephone.webp', alt: 'Business IP telephones with organized voice and network equipment in a communications area', width: 1200, height: 800, caption: 'Representative business telephony environment; platform and equipment vary by approved scope.' }]
  },
  'import-export': {
    image: '/images/services/import-export-logistics.webp',
    imageAlt: 'Organized commercial cargo, packaged equipment and container handling at a Gulf-region logistics facility',
    imageWidth: 1200,
    imageHeight: 800,
    detailImages: [{ src: '/images/services/import-export-logistics.webp', alt: 'Palletized commercial equipment moving between a warehouse and container terminal', width: 1200, height: 800, caption: 'Representative B2B logistics environment; no shipment ownership or customs accreditation is implied.' }]
  },
  'supply-logistics': {
    image: '/images/services/supply-logistics.webp',
    imageAlt: 'Industrial materials organized in a commercial warehouse for coordinated supply and delivery',
    imageWidth: 1200,
    imageHeight: 800,
    detailImages: [{ src: '/images/services/supply-logistics.webp', alt: 'Packaged cable, conduit and industrial materials prepared for dispatch in a commercial warehouse', width: 1200, height: 800, caption: 'Representative project-supply environment; materials and delivery arrangements depend on the approved requirement.' }]
  }
};

const telecomSeoEnhancements: Record<string, Pick<Service, 'primaryKeyword' | 'secondaryKeywords'> & Required<Pick<Service, 'directAnswer' | 'componentsSummary' | 'mainComponents' | 'reassurance'>>> = {
  'wired-network': {
    primaryKeyword: 'wired network installation Kuwait',
    secondaryKeywords: ['fibre and copper network contractor Kuwait', 'data network cabling Kuwait', 'underground fibre cable installation', 'direct-buried network cable', 'duct route network work', 'handhole and manhole network work', 'LAN network contractor Kuwait'],
    directAnswer: 'Wired network installation creates dependable fibre or copper links within buildings, across compounds or along approved outdoor routes. Zenith Line supports Kuwait commercial, industrial and project teams with route review, cable installation, termination, splicing, testing and documented handover. The final method and civil interfaces are confirmed after drawings, distances, utilities, access and acceptance requirements are reviewed.',
    componentsSummary: 'A wired LAN may use copper for shorter endpoint connections and fibre for longer backbones or electrically isolated links. Indoor containment differs from underground fibre cable installation through ducts, handholes or manholes. Direct-buried network cable needs an approved route, suitable protection and defined civil reinstatement. Managed switches, cabinets, terminations, labels and agreed tests complete the connection.',
    mainComponents: ['Fibre and copper cables', 'Ducts and containment', 'Terminations and cabinets'],
    reassurance: 'Indoor and outdoor routes • Fibre and copper options • Defined test and handover basis'
  },
  'wireless-microwave-networks': {
    primaryKeyword: 'wireless network solutions Kuwait',
    secondaryKeywords: ['point-to-point wireless link Kuwait', 'microwave network installation Kuwait', 'building-to-building wireless connectivity', 'outdoor wireless bridge Kuwait', 'wireless site survey Kuwait'],
    directAnswer: 'Wireless and microwave network solutions connect buildings or operational areas where a physical cable route may be impractical. Zenith Line can assess Kuwait point-to-point and point-to-multipoint requirements, line of sight, mounting, compatible radios, alignment and commissioning. Feasibility, capacity, frequency use, site permissions and regulatory responsibilities must be reviewed before the project scope is confirmed.',
    componentsSummary: 'A building-to-building wireless connection normally combines directional radios or antennas, stable outdoor mounts, protected cabling, power or PoE, surge protection and suitable network interfaces at both ends. An outdoor wireless bridge is different from indoor Wi-Fi: path clearance, Fresnel-zone obstruction, distance, interference, weather exposure and alignment all influence the recommendation and commissioning tests.',
    mainComponents: ['Directional radios and antennas', 'Outdoor mounts and protection', 'Power, cabling and interfaces'],
    reassurance: 'Path-led assessment • Stable mounting and alignment • Regulatory duties confirmed per project'
  },
  'structured-cabling': {
    primaryKeyword: 'structured cabling company Kuwait',
    secondaryKeywords: ['Cat6 cabling Kuwait', 'Cat6A cabling Kuwait', 'fibre optic cabling Kuwait', 'data cabling contractor Kuwait', 'patch panel installation Kuwait', 'network cabinet and rack installation', 'office network cabling Kuwait', 'cable testing and labelling'],
    directAnswer: 'Structured cabling provides the organized copper and fibre foundation for office data, voice, Wi-Fi, CCTV and connected building systems. Zenith Line can plan and install outlets, Cat6 or Cat6A links, fibre backbones, patch panels, racks, containment, labels and agreed testing in Kuwait. Quantities, categories, routes and acceptance records are confirmed from the property and approved specification.',
    componentsSummary: 'Copper horizontal cabling connects outlets to patch panels, while fibre optic cabling is often considered for backbones, longer distances or higher-capacity links. A complete channel includes compatible cable, jacks, faceplates, patch panels and patch leads. Network cabinet and rack installation also requires space, power, cooling, cable management and maintainable labelling; test evidence depends on the agreed instrument and acceptance standard.',
    mainComponents: ['Cat6, Cat6A and fibre', 'Outlets and patch panels', 'Racks and containment'],
    reassurance: 'Cat6, Cat6A and fibre options • Organized racks and labels • Testing defined in the quotation'
  },
  'cctv-surveillance-systems': {
    primaryKeyword: 'CCTV installation company Kuwait',
    secondaryKeywords: ['security camera installation Kuwait', 'IP CCTV system Kuwait', 'commercial CCTV Kuwait', 'warehouse CCTV installation', 'office and retail surveillance systems', 'CCTV recording and storage', 'CCTV maintenance Kuwait'],
    directAnswer: 'A commercial CCTV system combines purposeful camera views, recording, storage, network connectivity and controlled user access. Zenith Line can assess and deliver IP or compatible surveillance systems for Kuwait offices, retail properties, warehouses and other approved facilities. Camera count, image detail, retention, mounting, cabling and maintenance scope are confirmed after the required scenes and existing infrastructure are reviewed.',
    componentsSummary: 'An IP CCTV system may include fixed or varifocal cameras, suitable lenses, PoE switching, structured cabling, an NVR, storage drives, monitors and authorized remote viewing. Recording duration depends on camera count, resolution, frame rate, codec and activity. Commercial and warehouse CCTV installation also needs realistic mounting positions, lighting review, weather protection, bandwidth and permissions rather than camera quantity alone.',
    mainComponents: ['IP cameras and lenses', 'NVR and storage', 'PoE network and cabling'],
    reassurance: 'Coverage based on required views • Storage assumptions documented • Existing systems assessed first'
  },
  'pbx-telephone-exchange': {
    primaryKeyword: 'PBX installation Kuwait',
    secondaryKeywords: ['IP telephone system Kuwait', 'office phone system Kuwait', 'IP-PBX solutions Kuwait', 'VoIP telephone system Kuwait', 'telephone exchange installation', 'call routing and extension configuration', 'PBX maintenance and migration'],
    directAnswer: 'PBX and IP telephone solutions organize business extensions, incoming and outgoing call routes, reception handling and user features. Zenith Line can assess new or existing Kuwait office phone systems, including IP-PBX platforms, desk phones, gateways, IVR, extension configuration and controlled migration. Compatibility, carrier interfaces, numbering, user quantities and the handover scope are confirmed before implementation.',
    componentsSummary: 'An office phone system can combine an IP-PBX or compatible telephone exchange, SIP or carrier gateways, IP desk phones, switches, cabling, extensions, hunt groups, call routing and IVR. A VoIP telephone system still depends on network quality, power, security and provider interfaces. PBX migration should preserve agreed numbers and essential call flows through a planned cutover and test schedule.',
    mainComponents: ['IP-PBX or exchange', 'Desk phones and extensions', 'Gateways, network and cabling'],
    reassurance: 'New systems and migrations • Extensions and call flows documented • Carrier interfaces confirmed'
  },
  'door-access-security': {
    primaryKeyword: 'access control system Kuwait',
    secondaryKeywords: ['door access installation Kuwait', 'biometric access control Kuwait', 'card access system Kuwait', 'magnetic lock installation', 'time attendance and access integration', 'commercial door security system', 'access control maintenance Kuwait'],
    directAnswer: 'An access control system manages who may enter selected doors and records supported access events. Zenith Line can assess Kuwait commercial door-security requirements using compatible readers, credentials, controllers, locks, exit devices, power supplies, software and cabling. Door condition, life-safety interfaces, user volumes, time-attendance needs and existing equipment must be reviewed before products and responsibilities are confirmed.',
    componentsSummary: 'A card or biometric access-control door typically combines a reader, controller, credential database, suitable lock, door contact, request-to-exit device, emergency release interfaces where required, power backup and structured cabling. Magnetic lock installation must suit the door and approved egress design. Time-attendance integration depends on compatible hardware, software, policies and confirmed data responsibilities.',
    mainComponents: ['Readers and controllers', 'Locks, contacts and exit devices', 'Credentials and management software'],
    reassurance: 'Door hardware reviewed • Credentials and permissions defined • Compliance interfaces kept conditional'
  },
  'public-address-systems': {
    primaryKeyword: 'public address system Kuwait',
    secondaryKeywords: ['PA system installation Kuwait', 'commercial audio system Kuwait', 'school announcement system', 'warehouse paging system', 'facility audio system', 'speakers amplifiers microphones and zoning', 'PA system maintenance Kuwait'],
    directAnswer: 'A public address system distributes speech, paging or approved background audio to defined zones within a facility. Zenith Line can assess Kuwait commercial, school, retail and warehouse paging needs, then coordinate compatible speakers, amplifiers, microphones, controls, racks and cabling. Zone use, ambient noise, coverage, equipment loading and any special compliance requirement must be confirmed before the scope is approved.',
    componentsSummary: 'Commercial audio systems may use ceiling, wall or horn speakers selected for the space, supported by amplifiers with suitable power and headroom, microphones, source equipment, mixers or controllers, zone selection and dedicated cabling. A school announcement or warehouse paging system needs intelligible speech under real noise conditions. Emergency or life-safety use is excluded unless separately designed and evidenced.',
    mainComponents: ['Speakers and amplifiers', 'Microphones and controllers', 'Zones, racks and cabling'],
    reassurance: 'Zones planned around use • Speaker loading checked • No unverified life-safety claim'
  },
  'router-wifi': {
    primaryKeyword: 'Wi-Fi installation Kuwait',
    secondaryKeywords: ['business Wi-Fi solutions Kuwait', 'office Wi-Fi setup Kuwait', 'enterprise access point installation', 'Wi-Fi coverage survey Kuwait', 'router configuration Kuwait', 'guest Wi-Fi network', 'warehouse and commercial Wi-Fi', 'Wi-Fi dead-zone solutions'],
    directAnswer: 'Business Wi-Fi uses planned routers, enterprise access points, wired backhaul and security settings to provide suitable coverage and capacity across a workplace. Zenith Line can assess Kuwait offices, warehouses, retail and hospitality properties for new installation or dead-zone improvement. Layout, construction materials, users, devices, applications, cabling and segmentation are reviewed before access-point quantities and locations are confirmed.',
    componentsSummary: 'Consumer Wi-Fi usually relies on one general-purpose router and is not designed around business coverage, roaming, device density or network separation. A professional office Wi-Fi setup uses appropriately placed access points, PoE cabling, compatible management, secure router configuration and separate staff or guest networks. A coverage survey and capacity review help distinguish signal dead zones from congestion or upstream problems.',
    mainComponents: ['Routers and access points', 'PoE cabling and switching', 'Management and segmentation'],
    reassurance: 'Coverage and capacity reviewed • Managed access-point options • Staff and guest separation'
  },
  'network-security': {
    primaryKeyword: 'network security company Kuwait',
    secondaryKeywords: ['firewall installation Kuwait', 'business firewall configuration', 'VLAN configuration Kuwait', 'VPN setup for business Kuwait', 'secure office network', 'network monitoring Kuwait', 'access control and network segmentation', 'network security assessment'],
    directAnswer: 'Business network security reduces unnecessary access between users, devices, sites and internet-facing services through defined controls. Zenith Line can support Kuwait organizations with firewall installation, VLAN segmentation, VPN configuration, secure remote access, review and documented handover. Existing topology, traffic, identities, equipment capacity and operational responsibilities are assessed before changes are approved; complete protection from every threat is not promised.',
    componentsSummary: 'A secure office network can use firewall policies, VLAN configuration, VPN access, managed switching, protected administration and appropriate logging or monitoring. Segmentation separates groups such as staff, guests, cameras and voice while allowing only required traffic. A network security assessment must also consider identities, endpoints, updates, backups and ownership because a firewall alone cannot remove every business risk.',
    mainComponents: ['Firewalls and policies', 'VLANs and managed switching', 'VPN and monitoring controls'],
    reassurance: 'Rules based on required traffic • Segmentation and VPN options • No absolute-security promise'
  },
  'installation-support': {
    primaryKeyword: 'IT support company Kuwait',
    secondaryKeywords: ['business IT support Kuwait', 'on-site IT support Kuwait', 'server and network support', 'office IT maintenance', 'IT infrastructure setup Kuwait', 'network troubleshooting', 'IT equipment installation'],
    directAnswer: 'Business IT support covers defined on-site installation, configuration, maintenance and troubleshooting tasks for workplace infrastructure. Zenith Line can assist Kuwait offices and operational sites with network, rack, server-adjacent, workstation and peripheral requirements where compatible and agreed. Equipment models, symptoms, affected users, access, warranty limits and work timing are reviewed before the visit or project scope is confirmed.',
    componentsSummary: 'IT infrastructure setup can involve racks, switches, routers, wireless equipment, servers or storage interfaces, user devices, peripherals, power protection and documentation. Network troubleshooting starts with repeatable symptoms, topology, logs and recent changes rather than replacing equipment immediately. Office IT maintenance, recurring support hours, response targets or an SLA are available only when specifically assessed and confirmed in writing.',
    mainComponents: ['Network and rack equipment', 'Workstations and peripherals', 'Diagnostics and documentation'],
    reassurance: 'Project-based on-site support • Symptoms and access reviewed • No unconfirmed SLA or response time'
  }
};

export const services: Service[] = [...constructionServices, ...telecomServices, ...supportServices];
for (const item of services) if (imageOverrides[item.slug]) Object.assign(item, imageOverrides[item.slug]);
for (const item of services) if (telecomSeoEnhancements[item.slug]) Object.assign(item, telecomSeoEnhancements[item.slug]);

export const categories = ['All', 'Construction', 'Structures', 'MEP', 'Telecom & IT', 'Trading & Support'] as const;

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
