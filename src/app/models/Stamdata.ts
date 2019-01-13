import {MedlGruppe} from 'src/app/models/MedlGruppe';
import {Dage1} from './Dage1';
import {DelOmraade} from './DelOmraade';
import {GeoKode} from './GeoKode';
import {HovedGruppe} from './HovedGruppe';
import {PostNr} from './PostNr';
import {Region} from './Region';
import {Prisers} from './Prisers';
import {PrislisterPrBladPrUges} from './PrislisterPrBladPrUges';
import {PrislisterPrBladÅr} from './PrislisterPrBladÅr';
import {MedieplanLinjer} from './MedieplanLinjer';
import {Dage} from './Dage';

export interface StamData {

  BladID: number;
  Navn: string;
  Navn2: string;
  Adresse: string;
  Adresse2: string;
  PostNr: number | null;
  Tlf: string;
  Fax: string;
  CVR: string;
  FIK: string;
  Kontaktperson: string;
  HovedgruppeID: number | null;
  MedlemMåned: number | null;
  MedlemÅr: number | null;
  MedlemSiden: any;
  Ejerforhold: string;
  Koncern: string;
  Ophørt: boolean;
  VisPåWWW: boolean;
  RegionID: number | null;
  DelOmrådeID: number | null;
  DiMPDelOmrådeKode: string;
  GeoKodeID: number | null;
  Totalområde: number | null;
  TotalområdePct: number | null;
  Primær: number | null;
  PrimærPct: number | null;
  WWWDækningSomTekst: string;
  Oplag: number | null;
  UgedagID: number | null;
  Format: string;
  OrdredeadlineTekst: string;
  OrdredeadlineRubrik: string;
  MaterialedeadlineTekst: string;
  MaterialedeadlineRubrik: string;
  OrdreEmail: string;
  OrdrecheckEmail: string;
  OrdrecheckSendeDagID: number | null;
  SendetidOrdrecheck: string;
  SendIndeværendeUge: boolean | null;
  StamdataEmail: string;
  PrisforespørgselEmails: string;
  OrienteringEmails: string;
  Emails: string;
  KontaktpersonerEmails: string;
  BogholderiEmails: string;
  BogholderiKontaktperson: string;
  MedieNetKode: string;
  MatGodtBeløb: number | null;
  Hjemmeside: string;
  RedaktionEmail: string;
  AnnonceEmail: string;
  MaterialeEmail: string;
  AnnonceKontrolEmail: string;
  BilagsbladeEmail: string;
  FakturaGruppeID: number;
  SalgsGruppeID: number | null;
  GruppeRabat: string;
  SamannonceringsRabat: string;
  MåGiveFarveRabat: boolean | null;
  GiverWebTillæg: boolean;
  OrdreDeadlineTekstDag: number | null;
  OrdreDeadlineTekstKl: string;
  MaterialeDeadlineTekstDag: number | null;
  MaterialeDeadlineTekstKl: string;
  OrdreDeadlineRubrikDag: number | null;
  OrdreDeadlineRubrikKl: string;
  MaterialeDeadlineRubrikDag: number | null;
  MaterialeDeadlineRubrikKl: string;
  Overført: boolean;
  timestamp: string;


  MedIGruppes: MedlGruppe[];
  Dage: Dage;
  Dage1: Dage1;
  DelOmråde: DelOmraade;
  GeoKode: GeoKode;
  HovedGruppe: HovedGruppe;
  tblPostNr: PostNr;
  tblRegion: Region;

  MedieplanLinjers: MedieplanLinjer[];

  Prisers: Prisers[];

  PrislisterPrBladPrUges: PrislisterPrBladPrUges[];

  PrislisterPrBladPrÅr: PrislisterPrBladÅr[];
}
