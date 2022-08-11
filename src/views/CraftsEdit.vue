<script>
import axios from "axios";
export default {
  data: function () {
    return {
      craft: {},
      editCraftParams: {},
      errors: [],
    };
  },
  created: function () {
    axios.get("/crafts" + this.$route.params.id).then((response) => {
      console.log("crafts show", response);
      this.craft = response.data;
      this.editCraftParams = this.craft;
    });
  },
  methods: {
    updateCraft: function (craft) {
      axios
        .patch("/crafts" + craft.id, this.editCraftParams)
        .then((response) => {
          console.log("crafts update", response);
          this.$router.push("/crafts");
        })
        .catch((error) => {
          console.log("crafts update error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
