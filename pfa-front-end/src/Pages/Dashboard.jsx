import { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, LogOut, Plus, Settings, Users } from "lucide-react";
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
  Avatar,
} from "@material-tailwind/react";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";

// Mock data for reservations
const upcomingReservations = [
  {
    id: 1,
    room: "Meeting Room A",
    date: "2025-04-10",
    startTime: "10:00",
    endTime: "12:00",
    amenities: ["Whiteboard", "Datashow"],
    price: 50,
  },
  {
    id: 2,
    room: "Private Office 3",
    date: "2025-04-15",
    startTime: "14:00",
    endTime: "16:00",
    amenities: ["Coffee Service"],
    price: 35,
  },
];

const pastReservations = [
  {
    id: 3,
    room: "Event Space",
    date: "2025-03-20",
    startTime: "09:00",
    endTime: "17:00",
    amenities: ["Whiteboard", "Datashow", "Coffee Service"],
    price: 200,
  },
  {
    id: 4,
    room: "Meeting Room B",
    date: "2025-03-15",
    startTime: "13:00",
    endTime: "14:00",
    amenities: ["Whiteboard"],
    price: 25,
  },
];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("upcoming");

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar/>
      
      <main className="flex-1 container py-8">
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
              <Button className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                <Link to="/reserve" className="text-white">Reserve a Room</Link>
              </Button>
            </div>
          </div>

          <Tabs value={activeTab} className="mt-8">
            <TabsHeader className="bg-transparent" indicatorProps={{ className: "bg-purple-500" }}>
              <Tab value="upcoming" onClick={() => setActiveTab("upcoming")}>
                Upcoming Reservations
              </Tab>
              <Tab value="past" onClick={() => setActiveTab("past")}>
                Past Reservations
              </Tab>
            </TabsHeader>
            <TabsBody>
              <TabPanel value="upcoming" className="px-0">
                {upcomingReservations.length > 0 ? (
                  <div className="grid gap-4 md:grid-cols-2">
                    {upcomingReservations.map((reservation) => (
                      <Card key={reservation.id} className="w-full">
                        <CardHeader
                          floated={false}
                          shadow={false}
                          color="transparent"
                          className="pb-2 pt-4 px-4"
                        >
                          <div className="flex justify-between items-center">
                            <Typography variant="h5">{reservation.room}</Typography>
                            <Typography color="purple" className="font-semibold">
                              ${reservation.price}
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
                              {reservation.startTime} - {reservation.endTime}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {reservation.amenities.map((amenity) => (
                              <span
                                key={amenity}
                                className="bg-purple-100 text-purple-800 text-xs px-2.5 py-0.5 rounded-full"
                              >
                                {amenity}
                              </span>
                            ))}
                          </div>
                        </CardBody>
                        <CardFooter className="flex justify-between pt-0">
                          <Button variant="outlined" size="sm">
                            Modify
                          </Button>
                          <Button
                            variant="outlined"
                            size="sm"
                            color="red"
                            className="border-red-200 text-red-500 hover:bg-red-50"
                          >
                            Cancel
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                ) : (
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
                {pastReservations.length > 0 ? (
                  <div className="grid gap-4 md:grid-cols-2">
                    {pastReservations.map((reservation) => (
                      <Card key={reservation.id} className="w-full">
                        <CardHeader
                          floated={false}
                          shadow={false}
                          color="transparent"
                          className="pb-2 pt-4 px-4"
                        >
                          <div className="flex justify-between items-center">
                            <Typography variant="h5">{reservation.room}</Typography>
                            <Typography color="gray" className="font-semibold">
                              ${reservation.price}
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
                              {reservation.startTime} - {reservation.endTime}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {reservation.amenities.map((amenity) => (
                              <span
                                key={amenity}
                                className="bg-gray-100 text-gray-800 text-xs px-2.5 py-0.5 rounded-full"
                              >
                                {amenity}
                              </span>
                            ))}
                          </div>
                        </CardBody>
                        <CardFooter className="flex justify-between pt-0">
                          <Button variant="outlined" size="sm">
                            Book Again
                          </Button>
                          <Button variant="text" size="sm">
                            View Receipt
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                ) : (
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
      
      <Footer/>
    </div>
  );
}