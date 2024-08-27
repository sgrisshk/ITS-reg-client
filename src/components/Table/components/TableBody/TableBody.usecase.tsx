import CopyIcon from '@/components/icons/CopyIcon'
import CrossIcon from '@/components/icons/CrossIcon'
import CopyAddressIcon from '@/components/icons/CopyAddressIcon'
import TrashIcon from '@/components/icons/TrashIcon'
import { TablePopupFull } from '../Popover/Popover.usecase'

export const TableBodyUsecaseDefault = {
    left: <p>left</p>,
    right: <p>right</p>,
}

export const TableBodyUsecaseOptions = {
    left: <p >left</p>,
    right: <p>right</p>,
    ...TablePopupFull,
}

export const TableBodyUsecaseOnlyLeft = {
    left: <p>left</p>,
    ...TablePopupFull,
}

export const TableBodyUsecaseOnlyRight = {
    right: <p>right</p>,
    ...TablePopupFull,
}

export const TableBodyUsecaseFull = {
    left: <p>left</p>,
    right: <><p>right1</p> <p>right2</p> <p>right3</p></>,
    ...TablePopupFull,
}