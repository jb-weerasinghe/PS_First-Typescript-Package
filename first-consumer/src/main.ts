import { AddService, DevisionService, SubstractService } from 'jb-calculator'

const result = AddService.add(1, 2, 3, 4, 5);
console.log(result)

const subResult = SubstractService.substract(10, 8);
console.log('Substract Result ->', subResult)

const devisionResult = DevisionService.devision(10, 8);
console.log('Devision Result ->', devisionResult)