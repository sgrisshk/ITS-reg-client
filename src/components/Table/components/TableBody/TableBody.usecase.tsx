import CopyIcon from '@/components/icons/CopyIcon'
import CrossIcon from '@/components/icons/CrossIcon'
import CopyAddressIcon from '@/components/icons/CopyAddressIcon'
import TrashIcon from '@/components/icons/TrashIcon'
import { TablePopupFull } from '../Popover/Popover.usecase'

export const TableBodyUsecaseDefault = {
    left: <p className='w-44'>left</p>,
    right: <p className='w-44'>right</p>,
}

export const TableBodyUsecaseOptions = {
    left: <p className='w-44'>left</p>,
    right: <p className='w-36'>right</p>,
    ...TablePopupFull,
}

export const TableBodyUsecaseOnlyLeft = {
    left: <p className='w-44'>left</p>,
    ...TablePopupFull,
}

export const TableBodyUsecaseOnlyRight = {
    right: <p className='w-36'>right</p>,
    ...TablePopupFull,
}

export const TableBodyUsecaseFull = {
    left: <p className='w-44'>left</p>,
    right: <><p className='w-44'>right1</p> <p className='w-44'>right2</p> <p className='w-36'>right3</p></>,
    ...TablePopupFull,
}

export const TableBodyUsecaseEmptyTemplate = {
    left: <p className='text-nowrap w-44'>Пустой шаблон</p>,
    right: <><p className='w-44'>@its_tech</p></>,
    
}

export const TableBodyUsecaseRegBMSTU = {
    left: <p className='text-nowrap w-44'>Регистрация на мероприятие МГТУ им.Н.Э.Баумана</p>,
    right: <><p className='w-44'>@stud_bmstu</p></>,
    
}

export const TableBodyUsecaseRegVolonterMero = {
    left: <p className='text-nowrap w-44'>Регистрация волонтёра на мероприятие</p>,
    right: <><p className='w-44'>@activist_bmstu</p></>,
    
}

export const TableBodyUsecaseRegVolonterHardaton = {
    left: <p className='text-nowrap w-44'>Регистрация волонтёра на Хардатон</p>,
    right: <><p className='w-44'>@CMR</p></>,
    
}
