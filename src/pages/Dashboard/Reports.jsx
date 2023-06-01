import BigTable from "../../components/Tables";
import { useSearchParams } from "react-router-dom";

export default function Reports() {
  const reports = [
    {
      reportId: 1,
      category: "Youtube Report",
      status: "Resolved",
      issuer: "Issueman#9999",
      resolver: "helloworld#2525",
      comments: "500",
      dateIssued: "1029",
    },
    {
      reportId: 2,
      category: "Youtube Report",
      status: "Pending",
      issuer: "Issueman#9999",
      resolver: "helloworld#2525",
      comments: "500",
      dateIssued: "1029",
    },
    {
      reportId: 3,
      category: "Youtube Report",
      status: "Error",
      issuer: "Issueman#9999",
      resolver: "helloworld#2525",
      comments: "500",
      dateIssued: "1029",
    },
    {
      reportId: 4,
      category: "Youtube Report",
      status: "Resolved",
      issuer: "Issueman#9999",
      resolver: "helloworld#2525",
      comments: "500",
      dateIssued: "1029",
    },
    {
      reportId: 5,
      category: "Youtube Report",
      status: "Pending",
      issuer: "Issueman#9999",
      resolver: "watchlist#2525",
      comments: "500",
      dateIssued: "1029",
    },
    {
      reportId: 6,
      category: "Youtube Report",
      status: "Error",
      issuer: "Issueman#9999",
      resolver: "watchlist#2525",
      comments: "500",
      dateIssued: "1029",
    },
    {
      reportId: 7,
      category: "Youtube Report",
      status: "Resolved",
      issuer: "Issueman#9999",
      resolver: "helloworld#2525",
      comments: "500",
      dateIssued: "1029",
    },
    {
      reportId: 8,
      category: "Youtube Report",
      status: "Pending",
      issuer: "Issueman#9999",
      resolver: "helloworld#2525",
      comments: "500",
      dateIssued: "1029",
    },
    {
      reportId: 9,
      category: "Youtube Report",
      status: "Error",
      issuer: "watchlist#9999",
      resolver: "helloworld#2525",
      comments: "500",
      dateIssued: "1029",
    },
    {
      reportId: 10,
      category: "Youtube Report",
      status: "Resolved",
      issuer: "watchlist#9999",
      resolver: "helloworld#2525",
      comments: "500",
      dateIssued: "1029",
    },
    {
      reportId: 11,
      category: "Youtube Report",
      status: "Pending",
      issuer: "watchlist#9999",
      resolver: "helloworld#2525",
      comments: "500",
      dateIssued: "1029",
    },
    {
      reportId: 12,
      category: "Youtube Report",
      status: "Error",
      issuer: "watchlist#9999",
      resolver: "helloworld#2525",
      comments: "500",
      dateIssued: "1029",
    },
  ];
  const [searchParams, setSearchParams] = useSearchParams();
  const params = searchParams.get("user") ? searchParams.get("user") : null;
  let filteredReports;

  if (params === null) {
    filteredReports = reports;
  } else {
    filteredReports = reports.filter((item) => {
      return (
        item.issuer.toLowerCase().includes(params.toLocaleLowerCase()) ||
        item.resolver.toLowerCase().includes(params.toLocaleLowerCase())
      );
    });
  }

  return (
    <main className="p-4 md:ml-64 h-auto pt-20">
      <div>
        <h1 className="text-center text-white font-bold text-2xl">Reports</h1>
        <BigTable reportData={filteredReports} />
      </div>
    </main>
  );
}
