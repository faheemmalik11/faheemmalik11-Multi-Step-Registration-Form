import React, { FC } from 'react'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import { STEPS } from "@/enums";


interface Props {
    cardHeader: React.ReactElement,
    cardBody: React.ReactElement,
    cardFooter: React.ReactElement
    step: STEPS
}

const RegistrationCard: FC<Props> = ({cardHeader, cardFooter, cardBody, step}) => {
  return (
    <Card className="w-full">
    <CardHeader>
      {cardHeader}
    </CardHeader>

    <CardContent>
     {cardBody}
    </CardContent>

  
    <CardFooter className={`flex ${step === STEPS.USER_DETAILS ? "justify-end":"justify-between"}`}>
     {cardFooter}
    </CardFooter>
  </Card>
  )
}

export default RegistrationCard
