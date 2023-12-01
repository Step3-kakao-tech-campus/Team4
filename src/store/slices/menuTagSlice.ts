import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReviewImageTagInfo } from '../../types/review';

const initialState: ReviewImageTagInfo[] = [];

export const menuTagSlice = createSlice({
  name: 'menuTag',
  initialState,
  reducers: {
    resetMenuTag: () => [],
    addMenuTag: (state, action: PayloadAction<{
      imageIndex: number,
      locationX: number,
      locationY: number
    }>) => {
      state.push({
        tagIndex: state.length > 0 ? state[state.length - 1].tagIndex + 1 : 0,
        name: '',
        imageIndex: action.payload.imageIndex,
        locationX: action.payload.locationX,
        locationY: action.payload.locationY,
        rating: 0,
      });
    },
    modifyMenuTag: (state, action: PayloadAction<{
      tagIndex: number,
      name: string,
      rating: number
    }>) => state.map((tag) => {
      if (tag.tagIndex === action.payload.tagIndex) {
        return {
          ...tag,
          name: action.payload.name,
          rating: action.payload.rating,
        };
      }

      return tag;
    }),
    removeMenuTag: (
      state,
      action: PayloadAction<{ tagIndex: number }>,
    ) => state.filter((tag) => tag.tagIndex !== action.payload.tagIndex),
    removeAllMenuTagFromCurrentImage: (
      state,
      action: PayloadAction<{ imageIndex: number }>,
    ) => state.filter((tag) => tag.imageIndex !== action.payload.imageIndex),
  },
});

export const {
  resetMenuTag, addMenuTag, modifyMenuTag, removeMenuTag, removeAllMenuTagFromCurrentImage,
} = menuTagSlice.actions;
export const menuTagReducer = menuTagSlice.reducer;
