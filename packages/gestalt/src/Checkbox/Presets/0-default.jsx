import React from 'react'
import Box from '../../Box';
import Checkbox from '../Checkbox';
import Text from '../../Text/Text';
import Label from '../../Label/Label';

export default (
    <Box alignItems="center" direction="row" display="flex" uxpId='0'>
        <Checkbox
          checked
          id="usa"
          name="usa"
          uxpId='1'
        />
        <Label htmlFor="usa" uxpId='2'>
          <Box paddingX={2} uxpId='3'>
            <Text uxpId='4'>United States of America</Text>
          </Box>
        </Label>
      </Box>
)