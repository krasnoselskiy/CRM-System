<template>
  <div>
    <div class="page-title">
      <h3>Новая запись</h3>
    </div>

    <form class="form">
      <div class="input-field set_category">
        <select>
          <option>name cat</option>
        </select>
        <label>Выберите категорию</label>
      </div>

      <div class="record_type">
        <label>
          <input
              class="with-gap"
              name="type"
              type="radio"
              value="income"
          />
          <span>Доход</span>
        </label>
      </div>

      <div class="record_type">
        <label>
          <input
              class="with-gap"
              name="type"
              type="radio"
              value="outcome"
          />
          <span>Расход</span>
        </label>
      </div>

      <div class="input-field">
        <input
            id="amount"
            type="number"
        >
        <label for="amount">Сумма</label>
        <span class="helper-text invalid">amount пароль</span>
      </div>

      <div class="input-field">
        <input
            id="description"
            type="text"
        >
        <label for="description">Описание</label>
        <span
              class="helper-text invalid">description пароль</span>
      </div>

      <button class="btn waves-effect waves-light" type="submit">
        Создать
        <i class="material-icons right">send</i>
      </button>
    </form>
  </div>
</template>

<style>
  .set_category {
    padding-bottom: 25px;
  }
  .record_type {
    display: inline-block;
    margin-right: 10px;
  }
  [type="radio"]:not(:checked)+span, [type="radio"]:checked+span {
    padding-left: 25px;
  }
</style>
