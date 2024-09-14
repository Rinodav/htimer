<template>
  <div class="wrapper">
    <!-- Root блок с кликом для раскрытия/сокрытия этапов -->
    <div class="root" :class="{ 'root-open': isRootOpen }" @click="toggleRoot">
      <svg
        class="root-icon"
        width="24"
        height="22"
        viewBox="0 0 24 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.9395 4.52746L14.3525 0.598754C13.4297 0.176879 12.6738 -0.0164808 11.9355 0.00109736C11.1973 -0.0164808 10.4414 0.176879 9.51855 0.598754L0.931641 4.52746C0.316406 4.79993 0 5.30969 0 5.82825C0 6.35559 0.316406 6.85657 0.931641 7.12903L4.33301 8.66711L10.0371 6.00403C10.002 5.9425 9.98438 5.88977 9.98438 5.82825C9.98438 5.18664 10.96 4.72961 11.9619 4.72961C12.9727 4.72961 13.9395 5.18664 13.9395 5.82825C13.9395 6.48743 12.9727 6.95325 11.9619 6.95325C11.6543 6.95325 11.3379 6.9093 11.0566 6.82141L5.7041 9.3175L9.51855 11.0665C10.4414 11.4884 11.1973 11.673 11.9355 11.6642C12.6738 11.673 13.4297 11.4884 14.3525 11.0665L22.9395 7.12903C23.5547 6.84778 23.8711 6.35559 23.8711 5.82825C23.8711 5.30969 23.5547 4.79993 22.9395 4.52746ZM5.66895 10.7238V15.8654C7.19824 16.7794 9.36914 17.3331 11.9355 17.3331C17.0947 17.3331 20.6367 15.1095 20.6367 12.3673V9.59875L14.8887 12.2355C13.8252 12.7189 12.8584 12.965 11.9355 12.9562C11.0215 12.965 10.0459 12.7189 8.98242 12.2355L5.66895 10.7238ZM3.23438 9.60754V12.3673C3.23438 13.132 3.63867 14.0372 4.36816 14.8107V10.1261L3.23438 9.60754ZM3.59473 17.9484V20.2247C3.59473 20.9718 4.08691 21.464 4.83398 21.464H5.20312C5.9502 21.464 6.43359 20.9718 6.43359 20.2247V17.9484C6.43359 17.3683 6.14355 16.9464 5.66895 16.7794V15.8654C5.15918 15.5577 4.71973 15.2062 4.36816 14.8107V16.7794C3.89355 16.9376 3.59473 17.3683 3.59473 17.9484Z"
          fill="#84B4FC"
        />
      </svg>

      <h2>Этапы</h2>
      <svg
        class="arrow"
        xmlns="http://www.w3.org/2000/svg"
        width="11"
        height="21"
        viewBox="0 0 11 21"
        fill="none"
      >
        <path
          d="M2.1763 0.40248L10.5583 9.41094C10.8599 9.73055 11 10.0857 11 10.5C11 10.9143 10.8492 11.2931 10.5583 11.6009L2.1763 20.5975C1.9285 20.858 1.63761 21 1.28208 21C0.560237 21 2.15043e-06 20.3844 2.14111e-06 19.6032C2.1366e-06 19.2244 0.140061 18.8574 0.387857 18.5851L7.94026 10.5118L0.387857 2.41488C0.14006 2.14262 1.92866e-06 1.78749 1.92401e-06 1.39684C1.91469e-06 0.615558 0.560237 1.24493e-07 1.28208 1.15885e-07C1.62684 1.11774e-07 1.9285 0.142052 2.1763 0.40248Z"
          fill="#B7D4FF"
        />
      </svg>
    </div>
    <!-- Кнопка создания нового этапа -->
    <button
      class="add-stage"
      v-if="isRootOpen"
      @click="openModal(null, 'stage')"
    >
      <img src="@/assets/icons/sidebar/addStage.svg" alt="" />
      Создать новый этап
    </button>

    <!-- Список этапов, отображается в зависимости от состояния root -->
    <ul class="stage-list" v-if="isRootOpen">
      <li
        class="stage-item"
        :class="{ 'stage-item-open': stage.isOpen }"
        v-for="(stage, index) in stages"
        :key="index"
      >
        <div @click="toggleStage(index)">
          <svg
            class="stage-icon"
            v-if="!stage.isOpen"
            src="@/assets/icons/sidebar/stage.svg"
            alt=""
            width="19"
            height="17"
            viewBox="0 0 19 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.66667 15.1667H16C16.442 15.1667 16.8659 14.9911 17.1785 14.6785C17.4911 14.366 17.6667 13.942 17.6667 13.5V5.16667C17.6667 4.72464 17.4911 4.30072 17.1785 3.98816C16.8659 3.67559 16.442 3.5 16 3.5H9.39167C9.11715 3.49858 8.84724 3.42937 8.60591 3.29853C8.36459 3.16769 8.15931 2.97927 8.00833 2.75L7.325 1.75C7.17402 1.52073 6.96875 1.33231 6.72742 1.20147C6.48609 1.07063 6.21618 1.00142 5.94167 1H2.66667C2.22464 1 1.80072 1.17559 1.48816 1.48816C1.17559 1.80072 1 2.22464 1 2.66667V13.5C1 14.4167 1.75 15.1667 2.66667 15.1667Z"
              stroke="#84B4FC"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg
            class="stage-icon-open"
            v-else
            src="@/assets/icons/sidebar/selectedStage.svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.99984 11.6667L6.20817 9.25C6.34731 8.97388 6.56051 8.74191 6.82394 8.58002C7.08737 8.41814 7.39064 8.33272 7.69984 8.33333H16.6665C16.9211 8.33289 17.1724 8.39078 17.4012 8.50257C17.63 8.61436 17.8301 8.77707 17.9861 8.97822C18.1422 9.17937 18.2502 9.41361 18.3017 9.66296C18.3531 9.91231 18.3468 10.1701 18.2832 10.4167L16.9915 15.4167C16.899 15.7749 16.6899 16.0922 16.3972 16.3185C16.1045 16.5448 15.7448 16.6673 15.3748 16.6667H3.33317C2.89114 16.6667 2.46722 16.4911 2.15466 16.1785C1.8421 15.866 1.6665 15.442 1.6665 15V4.16667C1.6665 3.25 2.4165 2.5 3.33317 2.5H6.60817C6.88268 2.50142 7.15259 2.57063 7.39392 2.70147C7.63525 2.83231 7.84052 3.02073 7.9915 3.25L8.67484 4.25C8.82582 4.47927 9.03109 4.66769 9.27242 4.79853C9.51375 4.92937 9.78366 4.99858 10.0582 5H14.9998C15.4419 5 15.8658 5.17559 16.1783 5.48816C16.4909 5.80072 16.6665 6.22464 16.6665 6.66667V8.33333"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>{{ stage.name }}</span>
          <svg
            class="arrow"
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="21"
            viewBox="0 0 11 21"
            fill="none"
          >
            <path
              d="M2.1763 0.40248L10.5583 9.41094C10.8599 9.73055 11 10.0857 11 10.5C11 10.9143 10.8492 11.2931 10.5583 11.6009L2.1763 20.5975C1.9285 20.858 1.63761 21 1.28208 21C0.560237 21 2.15043e-06 20.3844 2.14111e-06 19.6032C2.1366e-06 19.2244 0.140061 18.8574 0.387857 18.5851L7.94026 10.5118L0.387857 2.41488C0.14006 2.14262 1.92866e-06 1.78749 1.92401e-06 1.39684C1.91469e-06 0.615558 0.560237 1.24493e-07 1.28208 1.15885e-07C1.62684 1.11774e-07 1.9285 0.142052 2.1763 0.40248Z"
              fill="#B7D4FF"
            />
          </svg>
        </div>
        <ul class="substage-list" v-if="stage.isOpen">
          <li
            class="substage-item"
            v-for="(subStage, subIndex) in stage.subStages"
            :key="subIndex"
          >
            <svg
              class="document"
              width="13"
              height="17"
              viewBox="0 0 13 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.46682 17H10.5332C12.1601 17 13 16.1135 13 14.419V7.2958C13 6.19751 12.8638 5.69543 12.2055 4.99723L8.24796 0.831564C7.60477 0.156899 7.07509 0 6.12165 0H2.46682C0.847497 0 0 0.886479 0 2.58883V14.419C0 16.1135 0.847497 17 2.46682 17ZM2.59546 15.431C1.86903 15.431 1.50582 15.0388 1.50582 14.317V2.68297C1.50582 1.96908 1.86903 1.56899 2.60303 1.56899H5.81141V5.83664C5.81141 6.97416 6.34866 7.5233 7.4383 7.5233H11.4942V14.317C11.4942 15.0388 11.131 15.431 10.397 15.431H2.59546ZM7.58207 6.15044C7.26426 6.15044 7.12806 6.00923 7.12806 5.68759V1.77296L11.2899 6.15044H7.58207Z"
                fill="#84B4FC"
              />
            </svg>

            <span>{{ subStage }}</span>
          </li>
          <button class="add-substage" @click="openModal(index, 'subStage')">
            <img src="@/assets/icons/sidebar/addSubstage.svg" alt="" />
            Создать новый подэтап
          </button>
        </ul>
      </li>
    </ul>

    <!-- Модальное окно -->
    <div v-if="isModalOpen" class="modal">
      <div class="modal-content">
        <h3>
          {{
            modalType === "stage"
              ? "Создать новый этап"
              : "Создать новый подэтап"
          }}
        </h3>
        <input v-model="newStageName" placeholder="Введите название" />
        <div class="modal-actions">
          <button @click="addStageOrSubStage">Добавить</button>
          <button @click="closeModal">Отменить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Список этапов
const stages = ref([]);

// Состояния для управления отображением root и модального окна
const isRootOpen = ref(false); // Отвечает за раскрытие этапов
const isModalOpen = ref(false);
const newStageName = ref("");
const modalType = ref("");
const currentStageIndex = ref(null);

// Функция для переключения состояния этапов (root)
const toggleRoot = () => {
  isRootOpen.value = !isRootOpen.value;
};

// Функция для переключения состояния отдельного этапа
const toggleStage = (index) => {
  stages.value[index].isOpen = !stages.value[index].isOpen;
};

// Открытие модального окна для создания этапа или подэтапа
const openModal = (index, type) => {
  currentStageIndex.value = index;
  modalType.value = type;
  newStageName.value = "";
  isModalOpen.value = true;
};

// Закрытие модального окна
const closeModal = () => {
  isModalOpen.value = false;
};

// Добавление нового этапа или подэтапа
const addStageOrSubStage = () => {
  if (modalType.value === "stage") {
    stages.value.push({
      name: newStageName.value,
      subStages: [],
      isOpen: false,
    });
  } else if (
    modalType.value === "subStage" &&
    currentStageIndex.value !== null
  ) {
    stages.value[currentStageIndex.value].subStages.push(newStageName.value);
  }
  closeModal();
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.wrapper {
  user-select: none;
}

.substage-list {
  color: $base-blue;
  font-size: 14px;
  font-weight: 600;
  padding: 0;
  li:first-child {
    padding-top: 0;
  }
  li {
    display: flex;
    align-items: center;
    padding: 5px 0 5px 35px;
    display: flex;
    align-items: center;
    span {
      margin-left: 10px;
    }
    &:hover {
      color: white;
      svg {
        path {
          fill: white;
        }
      }
    }
  }
}

.stage-list {
  margin: 15px 0 0 0;
  padding-left: 10px;
  .stage-item {
    cursor: pointer;
    .arrow {
      max-width: 6px;
      margin-left: auto;
    }
    div {
      display: flex;
      align-items: center;
      padding: 0 0 15px 0;
      span {
        color: $base-blue;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        margin-left: 15px;
      }
    }
    div:hover {
      span {
        color: white;
      }
      svg {
        path {
          stroke: white;
        }
      }
    }
  }

  .stage-item-open {
    div {
      span {
        color: white;
      }
    }
    .arrow {
      transform: rotate(90deg);
      path {
        fill: white;
      }
    }
  }
}

.add-stage {
  background-color: white;
  border: none;
  width: 100%;
  margin: 15px 0 0 0;
  padding: 15px 0 15px 15px;
  color: $base-color;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
}

.add-substage {
  background-color: white;
  border: none;
  width: 100%;
  margin: 10px 0 15px 0;
  padding: 7px 0 7px 32px;
  color: $base-color;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  color: #06f;
}

.root {
  display: flex;
  align-items: center;
  cursor: pointer;
  h2 {
    margin: 0 0 0 15px;
    color: $base-blue;
    font-size: 22px;
    font-weight: 600;
  }
  .arrow {
    margin-left: auto;
  }
  &:hover {
    h2 {
      color: white;
    }
    svg {
      path {
        fill: white;
      }
    }
  }
}

.root-open {
  h2 {
    font-size: 24px;
    color: white;
  }
  .root-icon {
    path {
      fill: white;
    }
  }
  .arrow {
    transform: rotate(90deg);
    path {
      fill: white;
    }
  }
}

ul {
  list-style-type: none;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  width: 300px;
  text-align: center;
}

.modal-actions {
  margin-top: 10px;
}
</style>
