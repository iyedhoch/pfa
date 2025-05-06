// Updated DashboardPage.jsx with real API integration and Modify/Cancel logic

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, LogOut, Plus, Settings } from "lucide-react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [reservations, setReservations] = useState([]);
  const id=1;
  useEffect(() => {
    // Only show reservations for user with id=1
    fetch("http://localhost:8080/Reservation")
      .then((res) => res.json())
      .then((data) => {
        const userReservations = data.filter((res) => id === 1);
        const now = new Date();
        const upcoming = userReservations.filter((res) => new Date(res.date) >= now);
        const past = userReservations.filter((res) => new Date(res.date) < now);
        setReservations({ upcoming, past });
      })
      .catch((err) => console.error("Failed to fetch reservations", err));
  }, []);

  const handleCancel = async (id) => {
    if (!window.confirm("Are you sure you want to cancel this reservation?")) return;
    await fetch(`http://localhost:8080/Reservation/${id}`, { method: "DELETE" });
    setReservations((prev) => ({
      upcoming: prev.upcoming.filter((r) => r.id !== id),
      past: prev.past,
    }));
  };

  const renderReservations = (list, isUpcoming) => (
    <div className="grid gap-4 md:grid-cols-2">
      {list.map((reservation) => (
        <Card key={reservation.id} className="w-full">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="pb-2 pt-4 px-4"
          >
            <div className="flex justify-between items-center">
              <Typography variant="h5">{reservation.room?.name || "Unnamed Room"}</Typography>
              <Typography color="purple" className="font-semibold">
                ${reservation.total_price}
              </Typography>
            </div>
            <Typography variant="small" color="gray">
              {new Date(reservation.date).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </Typography>
          </CardHeader>
          <CardBody className="pt-2 px-4">
            <div className="flex items-center text-sm mb-2">
              <Calendar className="mr-2 h-4 w-4 text-gray-500" />
              <span>
                {new Date(reservation.start_time).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })} -
                {new Date(reservation.end_time).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              </span>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {reservation.options?.map((option) => (
                <span
                  key={option.id}
                  className="bg-purple-100 text-rose-800 text-xs px-2.5 py-0.5 rounded-full"
                >
                  {option.label}
                </span>
              )) || <span className="text-sm text-gray-500">No options</span>}
            </div>
          </CardBody>
          <CardFooter className="flex justify-between pt-0">
            {isUpcoming ? (
              <>
                <Link to={`/reserve?edit=${reservation.id}`}>
                  <Button variant="outlined" size="sm">Modify</Button>
                </Link>
                <Button
                  variant="outlined"
                  size="sm"
                  color="red"
                  className="border-red-200 text-red-500 hover:bg-red-50"
                  onClick={() => handleCancel(reservation.id)}
                >
                  Cancel
                </Button>
              </>
            ) : (
              <Button variant="outlined" size="sm">Book Again</Button>
            )}
          </CardFooter>
        </Card>
      ))}
    </div>
  );

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 container py-8 p-4">
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <div>
              <Typography variant="h3" className="font-bold">Dashboard</Typography>
              <Typography color="gray" className="mt-1">Welcome back, John Doe</Typography>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outlined" size="sm" className="p-2">
                <Settings className="h-4 w-4" />
              </Button>
              <Button variant="outlined" size="sm" className="p-2">
                <LogOut className="h-4 w-4" />
              </Button>
              <Link to="/reserve">
                <Button className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  <span className="text-white">Reserve a Room</span>
                </Button>
              </Link>
            </div>
          </div>

          <Tabs value={activeTab} className="mt-8">
            <TabsHeader className="bg-transparent" indicatorProps={{ className: "bg-rose-500" }}>
              <Tab value="upcoming" className="text-black" onClick={() => setActiveTab("upcoming")}>Upcoming</Tab>
              <Tab value="past" className="text-black" onClick={() => setActiveTab("past")}>Past</Tab>
            </TabsHeader>
            <TabsBody>
              <TabPanel value="upcoming" className="px-0">
                {reservations.upcoming?.length > 0 ? renderReservations(reservations.upcoming, true) : (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <Calendar className="h-12 w-12 text-gray-300 mb-4" />
                    <Typography variant="h6" className="mb-2">No upcoming reservations</Typography>
                    <Typography variant="small" color="gray" className="mb-4">
                      You don't have any upcoming reservations.
                    </Typography>
                    <Button>
                      <Link to="/reserve" className="text-white">Reserve a Room</Link>
                    </Button>
                  </div>
                )}
              </TabPanel>
              <TabPanel value="past" className="px-0">
                {reservations.past?.length > 0 ? renderReservations(reservations.past, false) : (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <Calendar className="h-12 w-12 text-gray-300 mb-4" />
                    <Typography variant="h6" className="mb-2">No past reservations</Typography>
                    <Typography variant="small" color="gray" className="mb-4">
                      You haven't made any reservations yet.
                    </Typography>
                    <Button>
                      <Link to="/reserve" className="text-white">Reserve a Room</Link>
                    </Button>
                  </div>
                )}
              </TabPanel>
            </TabsBody>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
}
