import { createStore } from 'vuex';

const store = createStore({
  state() {
    // Load memories from localStorage, or use default values if none exist
    const storedMemories = localStorage.getItem('memories');
    return {
      memories: storedMemories ? JSON.parse(storedMemories) : [
        {
          id:"m1",
          title: "การท่องเที่ยว",
          description:"การท่องเที่ยวทุกของฉัน",
      
          image: "https://i.pinimg.com/736x/bb/4f/f7/bb4ff718bf9abfe42c793219d5dbeaef.jpg",
        },
        {
          id: "m2",
          title: "การออกกำลังกาย",
          description:"การออกกำลังการของฉัน",
      
          image: "https://i.pinimg.com/736x/0b/4d/2e/0b4d2eef722349033f3a317ba1dc80fe.jpg",
        },
        {
          id: "m3",
          title: "การนอน",
          description:"การนอนของฉัน",
      
          image: "https://i.pinimg.com/736x/0f/72/42/0f72420c03764c871d44a205894f97a6.jpg",
        },
        {
          id: "m4",
          title: "การใช้จ่ายเงิน",
          description:"การใช้เงินของฉัน",
      
          image: "https://i.pinimg.com/736x/b5/f4/c5/b5f4c5abd4c434d07e1a778f320f1973.jpg",
        },
      ] 
    } // Default memories if localStorage is empty
  },
  mutations: {
    addMemory(state, memoryData) {
      const newMemory = {
        id: new Date().toISOString(),
        title: memoryData.title,
        image: memoryData.imageUrl,
        description: memoryData.description,
      };

      state.memories.unshift(newMemory);
      // Persist the updated memories list to localStorage
      localStorage.setItem('memories', JSON.stringify(state.memories));
    },
  },
  actions: {
    addMemory(context, memoryData) {
      context.commit("addMemory", memoryData);
    },
  },
  getters: {
    memories(state) {
      return state.memories;
    },
    memoryById(state) {
      return (memoryId) => {
        return state.memories.find((memory) => memory.id === memoryId);
      };
    },
  },
});

export default store;


