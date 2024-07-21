import React from 'react'

function Footer() {
  return (
    <div className='min-h-[80vh] bg-[black] text-white w-full pt-[5vh] px-[5vw]'>
        <div className='flex border-b-[1px] border-[white] w-full pb-10'>
            <div className='w-[40%]'>
                <div className='mb-4'>
                    <div className='text-[32px] font-semibold'>RR</div>
                    <div className='text-[20px] text-[#9CA3AF]'>
                        <div>We send sculptures and</div>
                        <div>build projects worldwide.</div>
                    </div>
                </div>

                <div className='flex w-full justify-between'>
                    <div className='w-1/2'>
                        <div className='text-[20px] font-semibold mb-2'>Address:</div>
                        <div className='mb-4'>
                            <div className='text-[20px] font-semibold mb-1'>JAKARTA</div>
                            <div className='text-[#9CA3AF] text-[18px]'>
                                <div>Jalan Kemang Selatan VIII</div>
                                <div>No.2A, Bangka, South Jakarta</div>
                                <div>12730</div>
                            </div>
                        </div>
                        
                        <div>
                            <div className='text-[20px] font-semibold mb-1'>BALI</div>
                            <div className='text-[#9CA3AF] text-[18px]'>
                                <div>Opatan Art House</div>
                                <div>Jalan Subak Belaki No.60,</div>
                                <div>Sukawati, Gianyar, Bali</div>
                                <div>80582.</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className='w-1/2 pl-[10vw]'>
                        <div className='mb-2'>
                            <div className='text-[20px] font-semibold mb-2'>Email:</div>
                            <div className='text-[#9CA3AF] text-[18px]'>info@redyrahadian.com</div>
                        </div>

                        <div>
                            <div className='text-[20px] font-semibold mb-2'>Whatsapp:</div>
                            <div className='text-[#9CA3AF] text-[18px]'>+(62) 878 8457 5141</div>
                        </div>
                    </div>

                </div>

            </div>

            <div className='flex w-[60%] justify-center mt-10 pl-[10vw]'>
                <div className='mx-10'>
                    <div className='text-[20px]'>Art Works</div>
                    <div className='text-[#9CA3AF] text-[18px] my-3'>Art Sculpture</div>
                    <div className='text-[#9CA3AF] text-[18px] my-3'>Art Product</div>
                    <div className='text-[#9CA3AF] text-[18px] my-3'>Art Facade</div>
                    <div className='text-[#9CA3AF] text-[18px] my-3'>Art Building</div>
                </div>

                <div className='mx-10'>
                    <div className='text-[20px]'>Bio</div>
                    <div className='text-[#9CA3AF] text-[18px] my-3'>Article</div>
                    <div className='text-[#9CA3AF] text-[18px] my-3'>Exhibition</div>
                    <div className='text-[#9CA3AF] text-[18px] my-3'>Contact</div>
                </div>

                <div className='mx-10'>
                    <div className='text-[20px]'>Social</div>
                    <div className='text-[#9CA3AF] text-[18px] my-3'>Instagram</div>
                    <div className='text-[#9CA3AF] text-[18px] my-3'>Facebook</div>
                </div>

                
            </div>
        </div>

        <div className='flex justify-between mt-10 pb-10'>
            <div>Copyright © Redy Rahadian</div>
            <div className='flex justify-between'>
                <div className='mx-4'>Terms of Service</div>
                <div className='mx-4'>|</div>
                <div className='mx-4'>Privacy Policy</div>
            </div>
        </div>

    </div>
  )
}

export default Footer