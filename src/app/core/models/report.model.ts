export interface ReportSeries {
  label: string;
  value: number;
  color: string;
}

export interface ReportBlock {
  title: string;
  subtitle: string;
  series: ReportSeries[];
}
