import React, { ReactNode } from 'react';
import { TouchableOpacity } from 'react-native';
import { COLORS } from 'utils/constants/colors';
import { styles } from './styles';

interface FAButtonProps {
    color?: string
    onPress?: () => void
    disabled?: boolean
    children?: ReactNode
}

const FAButton = ({ color = COLORS.primary, disabled, onPress, children }: FAButtonProps) => (
    <TouchableOpacity 
        disabled={disabled} 
        onPress={onPress} 
        style={[styles.fabutton, { backgroundColor: color }]}
    >
        {children}
    </TouchableOpacity>
)

export default FAButton;