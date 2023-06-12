import subPlanModels from "../shared/SubPlanModels";
import whatsappModels from "../shared/WhatsAppModel";


class Servicio {

  public Servicios(word: string): boolean {
    const dictionary: (string)[] = ['servicios', 'si',];
    const containsMatch: boolean = dictionary.some((dict: string) => word.includes(dict));
    return containsMatch;
  };
  public Planes(word: string): any {
    const dictionary: (string)[] = [
      "plan 1", "plan 2", "plan 3", "plan 4", "plan 5", "plan 6",
    ];

    const containsMatch: boolean = dictionary.some((dict: string) => word.includes(dict));
    return containsMatch;
  }
  
  
  public ListDePlanes(word: string, numPerson: number): any {
    let model: any;
    const dictionary: (string)[] = [
      
      "plan 1", "plan 2", "plan 3", "plan 4", "plan 5", "plan 6",
    ];

    const plans: any = new Array();
    plans["plan 1"] = whatsappModels.MessagePlan1(numPerson);
    plans["plan 2"] = whatsappModels.MessagePlan2(numPerson);
    plans["plan 3"] = whatsappModels.MessagePlan3(numPerson);
    plans["plan 4"] = whatsappModels.MessagePlan4(numPerson);
    plans["plan 5"] = whatsappModels.MessagePlan5(numPerson);
    plans["plan 6"] = whatsappModels.MessagePlan6(numPerson);

    const found: string | undefined = dictionary.find((dict: string) => word.includes(dict));
    const foundInString: string = String(found)

    for (const plan in plans) {
      if (plan.includes(foundInString)) {
        model = plans[plan];
        break;
      }
    }
    return model;
  };

  //SubPlan para los palnes del plan 1
  public SubPlanes(word: string): any {
    const dictionary: (string)[] = [
      "plan hit data","plan hit data2"
    ];

    const containsMatch: boolean = dictionary.some((dict: string) => word.includes(dict));
    return containsMatch;
  }

  public SubPlan(word: string, numPerson: number): any {
    let model: any;
    const dictionary: (string)[] = [
      "plan hit data", "plan hit data2"
    ];
    console.log(word);
    
    const plans: any = new Array();
    plans["plan hit data"] = subPlanModels.MessageSubPlan(numPerson);
    plans["plan hit data2"] = subPlanModels.MessageSubPlan(numPerson);
    //...
    
    const found: string | undefined = dictionary.find((dict: string) => word.includes(dict));
    const foundInString: string = String(found)

    for (const plan in plans) {
      if (plan.includes(foundInString)) {
        model = plans[plan];
        
        break;
      }
    }
    return model;
  }

}
const servicio = new Servicio();
export default servicio;