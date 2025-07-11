import { useEffect, useState } from "react"
import { format } from "date-fns"
import { formatISO } from "date-fns";
import { CalendarIcon, Check, ChevronLeft, ChevronRight, Loader2, Users ,Monitor,Coffee} from "lucide-react"
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
  Radio,
  Select,
  Option,
  Popover,
  PopoverHandler,
  PopoverContent,
  Chip,
  Label,
  Checkbox,
  Separator
} from "@material-tailwind/react"
import Footer from "../layout/Footer"
import Navbar from "../layout/Navbar"
import Button from "../components/PrimaryButton"
import { LoadingSpinner } from "../components/Loading"
import Datepicker from "react-tailwindcss-datepicker"; 
import { Link } from "react-router-dom"
const rooms = [
  {
    id: "meeting-a",
    name: "Meeting Room A",
    capacity: 8,
    pricePerHour: 25,
    image: "/placeholder.svg?height=200&width=300",
    amenities: ["Whiteboard", "TV Screen", "WiFi"],
  },
  {
    id: "meeting-b",
    name: "Meeting Room B",
    capacity: 12,
    pricePerHour: 35,
    image: "/placeholder.svg?height=200&width=300",
    amenities: ["Whiteboard", "Projector", "WiFi"],
  },
  {
    id: "office-1",
    name: "Private Office 1",
    capacity: 4,
    pricePerHour: 20,
    image: "/placeholder.svg?height=200&width=300",
    amenities: ["Desk", "Ergonomic Chairs", "WiFi"],
  },
  {
    id: "event-space",
    name: "Event Space",
    capacity: 50,
    pricePerHour: 100,
    image: "/placeholder.svg?height=200&width=300",
    amenities: ["Stage", "Sound System", "WiFi"],
  },
]

const timeSlots = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"]

const optionalAmenities = [
  { id: "whiteboard", label: "Whiteboard", price: 5 },
  { id: "datashow", label: "Datashow", price: 15 },
  { id: "coffee", label: "Coffee Service", price: 10 },
]
export default function ReservePage() {
  const [date, setDate] = useState(new Date())
  const [startTime, setStartTime] = useState("")
  const [endTime, setEndTime] = useState("")
  const [selectedRoom, setSelectedRoom] = useState("")
  const [selectedAmenities, setSelectedAmenities] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [step, setStep] = useState(1)
  const [calendarOpen, setCalendarOpen] = useState(false)
  const today = new Date();
  const [dateValue, setDateValue] = useState({
    startDate: today,
    endDate: today,
  });

  useEffect(() => {
    // Always reset to today's date on first render
    setDateValue({ startDate: today, endDate: today });
  }, []);

  const handleDateChange = (newValue) => {
    setDateValue(newValue);
  };
  const calculatePrice = () => {
    if (!selectedRoom || !startTime || !endTime) return 0
    const room = rooms.find((r) => r.id === selectedRoom)
    if (!room) return 0
    const startHour = Number.parseInt(startTime.split(":")[0])
    const endHour = Number.parseInt(endTime.split(":")[0])
    const hours = endHour - startHour
    return room.pricePerHour * hours
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      // Navigate to dashboard in a real app
      window.location.href = "/dashboard"
    }, 1500)
  }

  const nextStep = () => {
    setStep(step + 1)
    window.scrollTo(0, 0)
  }

  const prevStep = () => {
    setStep(step - 1)
    window.scrollTo(0, 0)
  }
  const getStepClass = (targetStep) =>
    `flex items-center justify-center w-10 h-10 rounded-full border-2 font-medium ${
      step >= targetStep ? "border-pink-600 bg-pink-600 text-white" : "border-gray-300 bg-white text-gray-400"
    }`

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar/>
      
      <main className="flex-1 container py-8 px-4">
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center mb-8">
            <Link to={"/"}>
            <Button variant="text" size="sm" className="mr-2 flex items-center gap-1 text-gray-700">
              <ChevronLeft className="h-4 w-4" /> Back
            </Button>
            </Link>
            <Typography variant="h2" className="text-3xl font-bold tracking-tight">
              Reserve a Space
            </Typography>
          </div>

          {/* Progress Steps */}
          <div className="relative mb-10">
            <div className="absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2 bg-gray-200" />
            <div className="relative flex justify-between">
              {[1, 2, 3].map((num) => (
                <div key={num} className="flex flex-col items-center gap-2">
                  <div className={getStepClass(num)}>{num}</div>
                  <Typography variant="small" className={step >= num ? "text-pink-600 font-medium" : "text-gray-500"}>
                    {num === 1 ? "Date & Time" : num === 2 ? "Choose Room" : "Confirm"}
                  </Typography>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
          {step === 1 && (
  <Card className="overflow-hidden shadow-lg">
    <CardHeader color="pink" variant="gradient" className="p-6">
      <Typography variant="h4" color="gray">
        Select Date & Time
      </Typography>
      <Typography color="gray" variant="small" opacity={0.8}>
        Choose when you'd like to reserve your space
      </Typography>
    </CardHeader>

    <CardBody className="space-y-6 p-6">
      <div className="space-y-2">
        <Typography variant="small" className="font-medium">
          Date
        </Typography>
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <CalendarIcon className="h-5 w-5 text-pink-500" />
          </div>
          <input
            type="date"
            value={dateValue.startDate ? formatISO(dateValue.startDate, { representation: 'date' }) : ''}
            onChange={(e) => {
              const selectedDate = e.target.value ? new Date(e.target.value) : today;
              setDateValue({
                startDate: selectedDate,
                endDate: selectedDate
              });
            }}
            min={formatISO(today, { representation: 'date' })}
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 text-left"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Typography variant="small" className="font-medium">
            Start Time
          </Typography>
          <div className="relative">
            <Select 
              value={startTime} 
              onChange={setStartTime} 
              color="pink"
              className="[&>div]:min-h-[40px] [&>div]:py-2"
              menuProps={{
                className: "z-50 min-w-[200px] mt-1",
                placement: "bottom-start"
              }}
            >
              {timeSlots.slice(0, -1).map((time) => (
                <Option key={time} value={time} className="py-2">
                  {time}
                </Option>
              ))}
            </Select>
          </div>
        </div>
        <div className="space-y-2">
          <Typography variant="small" className="font-medium">
            End Time
          </Typography>
          <div className="relative">
            <Select
              value={endTime}
              onChange={setEndTime}
              disabled={!startTime}
              color="pink"
              className="[&>div]:min-h-[40px] [&>div]:py-2"
              menuProps={{
                className: "z-50 min-w-[200px] mt-1",
                placement: "bottom-start"
              }}
            >
              {startTime &&
                timeSlots
                  .filter((time) => time > startTime)
                  .map((time) => (
                    <Option key={time} value={time} className="py-2">
                      {time}
                    </Option>
                  ))}
            </Select>
          </div>
        </div>
      </div>
    </CardBody>

    <CardFooter className="flex justify-between p-6 bg-gray-50">
      <Link to={"/dashboard"}>
        <Button variant="outlined" color="gray">
          Cancel
        </Button>
      </Link>
      <Button
        onClick={() => setStep(2)}
        disabled={!dateValue.startDate || !startTime || !endTime}
        color="pink"
        className="flex items-center gap-2"
      >
        Next <ChevronRight className="h-4 w-4" />
      </Button>
    </CardFooter>
  </Card>
)}

            {step === 2 && (
              <Card className="overflow-hidden shadow-lg">
                <CardHeader color="pink" variant="gradient" className="p-6">
                  <Typography variant="h4" color="gray">
                    Choose a Room
                  </Typography>
                  <Typography color="gray" variant="small" opacity={0.8}>
                    Select the space that fits your needs
                  </Typography>
                </CardHeader>

                <CardBody className="p-6">
                  <div className="space-y-4">
                    {rooms.map((room) => (
                      <div
                        key={room.id}
                        className={`relative rounded-lg border-2 transition-all duration-200 ${
                          selectedRoom === room.id ? "border-pink-600 bg-pink-50" : "border-gray-200 hover:bg-gray-50"
                        }`}
                      >
                        <Radio
                          name="room"
                          id={room.id}
                          value={room.id}
                          checked={selectedRoom === room.id}
                          onChange={() => setSelectedRoom(room.id)}
                          color="pink"
                          className="peer absolute left-4 top-4 z-10"
                          ripple={false}
                        />
                        <label htmlFor={room.id} className="flex flex-col sm:flex-row gap-4 p-4 cursor-pointer">
                          <img
                            src={room.image || "/placeholder.svg"}
                            alt={room.name}
                            className="rounded-md object-cover w-full sm:w-32 h-24"
                          />
                          <div className="flex-1">
                            <div className="flex justify-between items-center">
                              <Typography variant="h5" className="text-base font-semibold">
                                {room.name}
                              </Typography>
                              <Typography variant="h6" color="pink" className="font-semibold">
                                ${room.pricePerHour}/hr
                              </Typography>
                            </div>
                            <div className="flex items-center text-sm text-gray-500 mt-1">
                              <Users className="mr-1 h-3 w-3" /> Up to {room.capacity} people
                            </div>
                            <div className="flex flex-wrap gap-2 mt-3">
                              {room.amenities.map((amenity) => (
                                <Chip
                                  key={amenity}
                                  value={amenity}
                                  size="sm"
                                  variant="ghost"
                                  color="pink"
                                  className="bg-pink-100 text-pink-800"
                                />
                              ))}
                            </div>
                          </div>
                          {selectedRoom === room.id && (
                            <div className="absolute top-4 right-4 flex h-5 w-5 items-center justify-center rounded-full bg-pink-600 text-white">
                              <Check className="h-3 w-3" />
                            </div>
                          )}
                        </label>
                      </div>
                    ))}
                  </div>
                </CardBody>

                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={prevStep}>
                    <ChevronLeft className="mr-2 h-4 w-4" /> Back
                  </Button>
                  <Button onClick={nextStep} disabled={!selectedRoom}>
                    Next <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            )}
{step === 3 && (
  <Card className="w-full max-w-2xl mx-auto">
    <CardHeader
      color="pink"
      variant="gradient"
      className="p-6 flex flex-col gap-1"
    >
      <Typography variant="h4" color="white">
        Confirm Reservation
      </Typography>
      <Typography variant="small" className="text-white opacity-80">
        Review your reservation details and add optional amenities
      </Typography>
    </CardHeader>

    <CardBody className="space-y-6">
      {/* Reservation Summary */}
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Typography variant="small" color="gray" className="font-medium">
              Date
            </Typography>
            <Typography>{date ? format(date, 'PPP') : 'Not selected'}</Typography>
          </div>
          <div>
            <Typography variant="small" color="gray" className="font-medium">
              Time
            </Typography>
            <Typography>{startTime} - {endTime}</Typography>
          </div>
          <div>
            <Typography variant="small" color="gray" className="font-medium">
              Room
            </Typography>
            <Typography>{rooms.find((r) => r.id === selectedRoom)?.name}</Typography>
          </div>
          <div>
            <Typography variant="small" color="gray" className="font-medium">
              Capacity
            </Typography>
            <Typography>
              Up to {rooms.find((r) => r.id === selectedRoom)?.capacity} people
            </Typography>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200" />

      {/* Optional Amenities */}
      <div>
        <Typography variant="h6" color="blue-gray">
          Optional Amenities
        </Typography>
        <div className="space-y-3">
          {optionalAmenities.map((amenity) => (
            <div
              key={amenity.id}
              className="flex items-center justify-between"
            >
              <div className="flex items-center space-x-2">
                <Checkbox
                  id={amenity.id}
                  checked={selectedAmenities.includes(amenity.id)}
                  onChange={(e) => {
                    const checked = e.target.checked;
                    if (checked) {
                      setSelectedAmenities([...selectedAmenities, amenity.id]);
                    } else {
                      setSelectedAmenities(
                        selectedAmenities.filter((id) => id !== amenity.id)
                      );
                    }
                  }}
                  className="checked:bg-pink-500"
                />
                <label
                  htmlFor={amenity.id}
                  className="flex items-center text-sm text-gray-700"
                >
                  {amenity.id === 'whiteboard' && (
                    <Monitor className="mr-2 h-4 w-4 text-gray-500" />
                  )}
                  {amenity.id === 'datashow' && (
                    <Monitor className="mr-2 h-4 w-4 text-gray-500" />
                  )}
                  {amenity.id === 'coffee' && (
                    <Coffee className="mr-2 h-4 w-4 text-gray-500" />
                  )}
                  {amenity.label}
                </label>
              </div>
              <Typography variant="small" color="gray">
                +${amenity.price}
              </Typography>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200" />

      {/* Price Breakdown */}
      <div className="space-y-2">
        <div className="flex justify-between">
          <Typography variant="small" color="gray">
            Room fee
          </Typography>
          <Typography variant="small">
            ${rooms.find((r) => r.id === selectedRoom)?.pricePerHour || 0} x{' '}
            {startTime && endTime
              ? Number.parseInt(endTime.split(':')[0]) -
                Number.parseInt(startTime.split(':')[0])
              : 0}{' '}
            hours
          </Typography>
        </div>

        {selectedAmenities.length > 0 &&
          selectedAmenities.map((amenityId) => {
            const amenity = optionalAmenities.find((a) => a.id === amenityId);
            return (
              <div key={amenityId} className="flex justify-between">
                <Typography variant="small">{amenity?.label}</Typography>
                <Typography variant="small">${amenity?.price}</Typography>
              </div>
            );
          })}

        <div className="border-t border-gray-200 my-2" />

        <div className="flex justify-between font-medium">
          <Typography>Total</Typography>
          <Typography>${calculatePrice()}</Typography>
        </div>
      </div>
    </CardBody>

    <CardFooter className="flex justify-between">
      <Button variant="outlined" onClick={prevStep} color="gray">
        <ChevronLeft className="mr-2 h-4 w-4" /> Back
      </Button>
      <Button type="submit" color="pink" disabled={isLoading}>
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing
          </>
        ) : (
          'Confirm Reservation'
        )}
      </Button>
    </CardFooter>
  </Card>
)}

            {isLoading && (
              <div className="flex justify-center items-center mt-8">
                <div className="flex flex-col items-center gap-2">
                  <Loader2 className="h-8 w-8 animate-spin text-pink-600" />
                  <Typography variant="small" className="text-gray-500">
                    Processing your reservation...
                  </Typography>
                </div>
              </div>
            )}
          </form>
        </div>
      </main>
      <Footer/>
    </div>
  )
}