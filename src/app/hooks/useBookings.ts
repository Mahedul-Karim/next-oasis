import { readApi } from '@/util/api'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

export const useBookings = () => {

    const { data,isLoading:isBookingLoading } = useQuery({
        queryKey:['bookings'],
        queryFn:()=>readApi({endpoint:'booking'})
    })


  return { bookingData:data?.bookings,isBookingLoading }
}

