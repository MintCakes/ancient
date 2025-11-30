export interface HardwareSpec {
  name: string;
  model: string;
  desc: string;
  specs: string[];
}

export interface ArchitectureLayer {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
}

export interface ScenarioData {
  time: string;
  temp: number;
  humidity: number;
  visitors: number;
  risk: number; // 0-100
}
