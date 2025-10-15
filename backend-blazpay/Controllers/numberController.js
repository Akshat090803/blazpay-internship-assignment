

exports . numberController = async (req,res)=>{

 try {

  const statsData = [
    { value: '1.2M', label: 'users', sliceAngle: 75 },
    { value: '12M+', label: 'transactions', sliceAngle: 160 },
    { value: '30+', label: 'chain support', sliceAngle: 95 },
  ];

   const timeLeftPhase1 = {
    days: '15',
    hours: '08',
    minutes: '36',
    seconds: '19',
  };


  const listing = {
    timeLine:'08',
    confirmed: '45'
  }


  res.status(200).json({
        statsData,
        timeLeftPhase1,
        listing
        
  })

  
 } catch (error) {
      console.error(err);
        res.status(500).json({ message: "Server error" });
 }

}